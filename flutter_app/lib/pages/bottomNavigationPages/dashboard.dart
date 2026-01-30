import 'package:flutter/material.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';

import 'package:flutter_app/config/api.dart';
import 'package:flutter_app/pages/artworkdetailspage.dart';

class Dashboard extends StatefulWidget {
  const Dashboard({super.key});

  @override
  State<Dashboard> createState() => _DashboardState();
}

class _DashboardState extends State<Dashboard> {
  String searchQuery = "";

  List<Map<String, dynamic>> artworks = [];
  List<Map<String, dynamic>> filteredArtworks = [];

  @override
  void initState() {
    super.initState();
    fetchArtwork();
  }

  Future<void> fetchArtwork() async {
    final prefs = await SharedPreferences.getInstance();
    final userId = prefs.getString("userId");

    final response = await http.get(
      Uri.parse('${ApiConfig.baseUrl}/app/$userId/home'),
    );

    if (response.statusCode == 200) {
      final List data = json.decode(response.body);

      setState(() {
        artworks = data.map<Map<String, dynamic>>((artwork) {
          return {
            'id': artwork['_id'],
            'title': artwork['title'] ?? '',
            'description': artwork['description'] ?? '',
            'rating': (artwork['workRating'] ?? 0).toDouble(),
            'image': artwork['imagePath'] ?? '',
          };
        }).toList();

        filteredArtworks = artworks;
      });
    } else {
      throw Exception('Failed to load artworks');
    }
  }

  void searchArtwork(String query) {
    setState(() {
      searchQuery = query;
      filteredArtworks = artworks
          .where(
            (art) => art['title'].toString().toLowerCase().contains(
              query.toLowerCase(),
            ),
          )
          .toList();
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Padding(
        padding: const EdgeInsets.all(16),
        child: Column(
          children: [
            // 🔍 Search Field
            TextField(
              onChanged: searchArtwork,
              decoration: InputDecoration(
                hintText: 'Search artwork...',
                prefixIcon: const Icon(Icons.search),
                filled: true,
                fillColor: Colors.white,
                border: OutlineInputBorder(
                  borderRadius: BorderRadius.circular(14),
                  borderSide: BorderSide.none,
                ),
              ),
            ),
            const SizedBox(height: 20),

            // 🖼 Artwork Grid
            Expanded(
              child: filteredArtworks.isEmpty
                  ? const Center(child: Text("No artworks found"))
                  : GridView.builder(
                      itemCount: filteredArtworks.length,
                      gridDelegate:
                          const SliverGridDelegateWithFixedCrossAxisCount(
                            crossAxisCount: 2,
                            mainAxisSpacing: 16,
                            crossAxisSpacing: 16,
                            childAspectRatio: 0.72,
                          ),
                      itemBuilder: (context, index) {
                        final art = filteredArtworks[index];
                        return ArtworkCard(
                          workId: art['id'],
                          title: art['title'],
                          description: art['description'],
                          imageUrl: art['image'],
                        );
                      },
                    ),
            ),
          ],
        ),
      ),
    );
  }
}

// 🎨 Artwork Card Widget
class ArtworkCard extends StatelessWidget {
  final String workId;
  final String title;
  final String description;
  final String imageUrl;

  const ArtworkCard({
    super.key,
    required this.workId,
    required this.title,
    required this.description,
    required this.imageUrl,
  });

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: () {
        Navigator.push(
          context,
          MaterialPageRoute(
            builder: (_) => ArtworkDetailPage(artworkId: workId),
          ),
        );
      },
      child: Container(
        decoration: BoxDecoration(
          color: Colors.white,
          borderRadius: BorderRadius.circular(18),
          boxShadow: [
            BoxShadow(
              color: Colors.black..withValues(alpha: 0.8),
              blurRadius: 12,
              offset: const Offset(0, 6),
            ),
          ],
        ),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            ClipRRect(
              borderRadius: const BorderRadius.vertical(
                top: Radius.circular(18),
              ),
              child: Image.network(
                '${ApiConfig.baseUrl}/$imageUrl',
                height: 150,
                width: double.infinity,
                fit: BoxFit.cover,
                errorBuilder: (_, __, ___) =>
                    const Icon(Icons.image_not_supported, size: 80),
              ),
            ),
            Padding(
              padding: const EdgeInsets.all(12),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(
                    title,
                    maxLines: 1,
                    overflow: TextOverflow.ellipsis,
                    style: const TextStyle(
                      fontWeight: FontWeight.bold,
                      fontSize: 16,
                    ),
                  ),
                  const SizedBox(height: 6),
                  Text(
                    description,
                    maxLines: 2,
                    overflow: TextOverflow.ellipsis,
                    style: TextStyle(color: Colors.grey.shade600, fontSize: 13),
                  ),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}
