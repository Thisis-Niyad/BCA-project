import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';
import 'package:flutter_app/config/api.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'package:flutter_app/pages/artistprofilepage.dart';

class ArtistListPage extends StatefulWidget {
  const ArtistListPage({super.key});

  @override
  State<ArtistListPage> createState() => _ArtistListPageState();
}

class _ArtistListPageState extends State<ArtistListPage> {
  final TextEditingController _searchController = TextEditingController();

  List<Map<String, dynamic>> artists = [];
  List<Map<String, dynamic>> filteredArtists = [];

  late Future<void> _artistFuture;

  @override
  void initState() {
    super.initState();
    _artistFuture = fetchArtists();
  }

  // 🔗 Fetch artists from backend
  Future<void> fetchArtists() async {
    final prefs = await SharedPreferences.getInstance();
    String? userId = prefs.getString("userId");
    final response = await http.get(
      Uri.parse('${ApiConfig.baseUrl}/app/$userId/viewartist?actor=artist'),
    );

    if (response.statusCode == 200) {
      final List data = json.decode(response.body);

      setState(() {
        artists = data.map<Map<String, dynamic>>((artist) {
          return {
            'id': artist['_id'],
            'name': artist['name'] ?? '',
            'rating': (artist['artistRating'] ?? 0).toDouble(),
            'image': artist['profileInfo']?['profileImg'] ?? '',
          };
        }).toList();

        filteredArtists = artists;
      });
    } else {
      throw Exception('Failed to load artists');
    }
  }

  void _searchArtist(String query) {
    setState(() {
      filteredArtists = artists
          .where(
            (artist) => artist['name'].toString().toLowerCase().contains(
              query.toLowerCase(),
            ),
          )
          .toList();
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Artists'), centerTitle: true),
      body: FutureBuilder<void>(
        future: _artistFuture,
        builder: (context, snapshot) {
          if (snapshot.connectionState == ConnectionState.waiting) {
            return const Center(child: CircularProgressIndicator());
          }

          if (snapshot.hasError) {
            return const Center(child: Text('Failed to load artists'));
          }

          return Column(
            children: [
              Padding(
                padding: const EdgeInsets.all(12),
                child: TextField(
                  controller: _searchController,
                  onChanged: _searchArtist,
                  decoration: InputDecoration(
                    hintText: 'Search artist by name',
                    prefixIcon: const Icon(Icons.search),
                    filled: true,
                    fillColor: Colors.grey.shade100,
                    border: OutlineInputBorder(
                      borderRadius: BorderRadius.circular(12),
                      borderSide: BorderSide.none,
                    ),
                  ),
                ),
              ),
              Expanded(
                child: filteredArtists.isEmpty
                    ? const Center(child: Text('No artists found'))
                    : ListView.builder(
                        itemCount: filteredArtists.length,
                        itemBuilder: (context, index) {
                          final artist = filteredArtists[index];
                          return ArtistCard(
                            artistId: artist['id'],
                            name: artist['name'],
                            rating: artist['rating'],
                            imageUrl: artist['image'],
                          );
                        },
                      ),
              ),
            ],
          );
        },
      ),
    );
  }
}

class ArtistCard extends StatelessWidget {
  final String artistId;
  final String name;
  final double rating;
  final String imageUrl;

  const ArtistCard({
    super.key,
    required this.artistId,
    required this.name,
    required this.rating,
    required this.imageUrl,
  });

  @override
  Widget build(BuildContext context) {
    return Card(
      margin: const EdgeInsets.symmetric(horizontal: 12, vertical: 6),
      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),
      elevation: 3,
      child: ListTile(
        leading: CircleAvatar(
          radius: 26,
          backgroundImage: imageUrl.isNotEmpty ? NetworkImage(imageUrl) : null,
          child: imageUrl.isEmpty ? const Icon(Icons.person) : null,
        ),
        title: Text(name, style: const TextStyle(fontWeight: FontWeight.w600)),
        subtitle: Row(
          children: [
            const Icon(Icons.star, color: Colors.amber, size: 18),
            const SizedBox(width: 4),
            Text(rating.toString()),
          ],
        ),
        trailing: const Icon(Icons.arrow_forward_ios, size: 16),
        onTap: () {
          Navigator.push(
            context,
            MaterialPageRoute(
              builder: (_) => ArtistProfilePage(artistId: artistId),
            ),
          );
        },
      ),
    );
  }
}
