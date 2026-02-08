import 'dart:convert';
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'package:shared_preferences/shared_preferences.dart';
import 'package:flutter_app/config/api.dart';
import 'package:flutter_app/pages/artistprofilepage.dart';

class ArtworkDetailsPage extends StatefulWidget {
  final String workId;

  const ArtworkDetailsPage({super.key, required this.workId});

  @override
  State<ArtworkDetailsPage> createState() => _ArtworkDetailsPageState();
}

class _ArtworkDetailsPageState extends State<ArtworkDetailsPage> {
  late Future<Map<String, dynamic>> artworkFuture;

  @override
  void initState() {
    super.initState();
    artworkFuture = fetchArtworkDetails();
  }

  Future<Map<String, dynamic>> fetchArtworkDetails() async {
    final prefs = await SharedPreferences.getInstance();
    final userId = prefs.getString("userId");
    final response = await http.get(
      Uri.parse('${ApiConfig.baseUrl}/app/$userId/artwork/${widget.workId}'),
    );

    if (response.statusCode == 200) {
      return json.decode(response.body);
    } else {
      throw Exception('Failed to load artwork');
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: FutureBuilder<Map<String, dynamic>>(
        future: artworkFuture,
        builder: (context, snapshot) {
          if (snapshot.connectionState == ConnectionState.waiting) {
            return const Center(child: CircularProgressIndicator());
          }

          if (snapshot.hasError || !snapshot.hasData) {
            return const Center(child: Text('Failed to load artwork'));
          }

          final data = snapshot.data!;

          final item = data['item'] ?? {};
          final artist = data['artist'] ?? {};

          final String title = item['title'] ?? 'Untitled Artwork';
          final String description =
              item['description'] ?? 'No description available';
          final String image = item['imagePath'] ?? '';
          final double rating = (item['rating'] ?? 0).toDouble();

          final String artistName = artist['name'] ?? 'Unknown Artist';
          // final String artistId = artist['_id'] ?? '';

          return Column(
            children: [
              // 🔹 Artwork Image
              Stack(
                children: [
                  image.isNotEmpty
                      ? Image.network(
                          "${ApiConfig.baseUrl}/$image",
                          height: 300,
                          width: double.infinity,
                          fit: BoxFit.cover,
                        )
                      : Container(
                          height: 300,
                          color: Colors.grey.shade300,
                          child: const Center(
                            child: Icon(Icons.image_not_supported, size: 50),
                          ),
                        ),
                  Positioned(
                    top: 40,
                    left: 12,
                    child: CircleAvatar(
                      backgroundColor: Colors.black54,
                      child: IconButton(
                        icon: const Icon(Icons.arrow_back, color: Colors.white),
                        onPressed: () => Navigator.pop(context),
                      ),
                    ),
                  ),
                ],
              ),

              // 🔹 Details
              Expanded(
                child: SingleChildScrollView(
                  padding: const EdgeInsets.all(16),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(
                        title,
                        style: const TextStyle(
                          fontSize: 24,
                          fontWeight: FontWeight.bold,
                        ),
                      ),
                      const SizedBox(height: 8),

                      // ⭐ Rating
                      Row(
                        children: [
                          const Icon(Icons.star, color: Colors.amber),
                          const SizedBox(width: 4),
                          Text(
                            rating.toString(),
                            style: const TextStyle(fontSize: 16),
                          ),
                        ],
                      ),

                      const SizedBox(height: 16),

                      // 📝 Description
                      Text(
                        description,
                        style: const TextStyle(
                          fontSize: 16,
                          color: Colors.black87,
                        ),
                      ),

                      const SizedBox(height: 24),

                      // 🎨 Artist Section
                      InkWell(
                        onTap: () {
                          Navigator.push(
                            context,
                            MaterialPageRoute(
                              builder: (_) =>
                                  ArtistProfilePage(artistId: artist['_id']),
                            ),
                          );
                        },
                        child: Row(
                          children: [
                            const CircleAvatar(child: Icon(Icons.person)),
                            const SizedBox(width: 12),
                            Column(
                              crossAxisAlignment: CrossAxisAlignment.start,
                              children: [
                                const Text(
                                  'Artist',
                                  style: TextStyle(color: Colors.grey),
                                ),
                                Text(
                                  artistName,
                                  style: const TextStyle(
                                    fontSize: 16,
                                    fontWeight: FontWeight.w600,
                                  ),
                                ),
                              ],
                            ),
                            const Spacer(),
                            const Icon(Icons.arrow_forward_ios, size: 16),
                          ],
                        ),
                      ),
                    ],
                  ),
                ),
              ),

              // 🛒 Bottom Buttons
              Container(
                padding: const EdgeInsets.all(12),
                child: Row(
                  children: [
                    Expanded(
                      child: OutlinedButton.icon(
                        icon: const Icon(Icons.shopping_cart),
                        label: const Text('Add to Cart'),
                        onPressed: () {
                          // Add to cart API call
                        },
                      ),
                    ),
                    const SizedBox(width: 12),
                    Expanded(
                      child: ElevatedButton(
                        onPressed: () {
                          // Buy now logic
                        },
                        child: const Text('Buy Now'),
                      ),
                    ),
                  ],
                ),
              ),
            ],
          );
        },
      ),
    );
  }
}
