import 'package:flutter/material.dart';

class Dashboard extends StatefulWidget {
  const Dashboard({super.key});

  @override
  State<Dashboard> createState() => _DashboardState();
}

class _DashboardState extends State<Dashboard> {
  String searchQuery = "";
  final List<Map<String, String>> artworks = [
    {
      'title': 'Cyber Calligraphy',
      'artist': 'Ayaan',
      'image': 'https://picsum.photos/400/300?1',
    },
    {
      'title': 'Neon Ayah',
      'artist': 'Zara',
      'image': 'https://picsum.photos/400/300?2',
    },
    {
      'title': 'Abstract Noor',
      'artist': 'Imran',
      'image': 'https://picsum.photos/400/300?3',
    },
  ];

  @override
  Widget build(BuildContext context) {
    final filteredArtworks = artworks
        .where(
          (art) =>
              art['title']!.toLowerCase().contains(searchQuery.toLowerCase()),
        )
        .toList();
    return Scaffold(
      body: Padding(
        padding: const EdgeInsets.all(16),
        child: Column(
          children: [
            // Search Field
            TextField(
              onChanged: (value) {
                setState(() => searchQuery = value);
              },
              decoration: InputDecoration(
                hintText: 'Search artwork or artist...',
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

            // Artwork Grid
            Expanded(
              child: GridView.builder(
                itemCount: filteredArtworks.length,
                gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
                  crossAxisCount: 2,
                  mainAxisSpacing: 16,
                  crossAxisSpacing: 16,
                  childAspectRatio: 0.72,
                ),
                itemBuilder: (context, index) {
                  final art = filteredArtworks[index];
                  return ArtworkCard(
                    title: art['title']!,
                    artist: art['artist']!,
                    imageUrl: art['image']!,
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

// Artwork card
class ArtworkCard extends StatelessWidget {
  final String title;
  final String artist;
  final String imageUrl;

  const ArtworkCard({
    super.key,
    required this.title,
    required this.artist,
    required this.imageUrl,
  });

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: () {},
      child: Container(
        decoration: BoxDecoration(
          color: Colors.white,
          borderRadius: BorderRadius.circular(18),
          boxShadow: [
            BoxShadow(
              color: Colors.black.withValues(alpha: 0.8),
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
                imageUrl,
                height: 150,
                width: double.infinity,
                fit: BoxFit.cover,
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
                    'by $artist',
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
