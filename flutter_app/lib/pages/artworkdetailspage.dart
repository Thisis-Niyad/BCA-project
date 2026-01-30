import 'package:flutter/material.dart';

class ArtworkDetailPage extends StatelessWidget {
  final String artworkId;
  final String artistId = "dfghj";
  final String title = "dfgh";
  final String description = "fvghnj";
  final String imagePath = "https://picsum.photos/400/300?1";
  final double workRating = 0.0;
  final int ratingCount = 0;
  final double price = 0.0;

  const ArtworkDetailPage({
    super.key,
    required this.artworkId,
    // required this.artistId,
    // required this.title,
    // required this.description,
    // required this.imagePath,
    // required this.workRating,
    // required this.ratingCount,
    // required this.price,
  });

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text("Artwork"),
        actions: [
          IconButton(
            icon: const Icon(Icons.favorite_border),
            onPressed: () {
              // wishlist logic
            },
          ),
        ],
      ),
      body: Column(
        children: [
          // 🖼 Artwork Image
          Expanded(
            child: SingleChildScrollView(
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  AspectRatio(
                    aspectRatio: 1,
                    child: Image.network(
                      imagePath,
                      fit: BoxFit.cover,
                      width: double.infinity,
                    ),
                  ),

                  Padding(
                    padding: const EdgeInsets.all(16),
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        // 🎨 Title
                        Text(
                          title,
                          style: const TextStyle(
                            fontSize: 22,
                            fontWeight: FontWeight.bold,
                          ),
                        ),

                        const SizedBox(height: 8),

                        // ⭐ Rating + Artist
                        Row(
                          mainAxisAlignment: MainAxisAlignment.spaceBetween,
                          children: [
                            Row(
                              children: [
                                const Icon(
                                  Icons.star,
                                  color: Colors.amber,
                                  size: 20,
                                ),
                                const SizedBox(width: 4),
                                Text(
                                  "$workRating ($ratingCount reviews)",
                                  style: const TextStyle(fontSize: 14),
                                ),
                              ],
                            ),

                            GestureDetector(
                              onTap: () {
                                // 👉 Navigate to Artist Profile Page
                                // Navigator.push(
                                //   context,
                                //   MaterialPageRoute(
                                //     builder: (_) =>
                                //         ArtistProfilePage(artistId: artistId),
                                //   )
                                // );
                              },
                              child: const Text(
                                "View Artist",
                                style: TextStyle(
                                  color: Colors.blue,
                                  fontWeight: FontWeight.w600,
                                ),
                              ),
                            ),
                          ],
                        ),

                        const SizedBox(height: 16),

                        // 💰 Price
                        Text(
                          "₹ ${price.toStringAsFixed(2)}",
                          style: const TextStyle(
                            fontSize: 24,
                            fontWeight: FontWeight.bold,
                            color: Colors.green,
                          ),
                        ),

                        const SizedBox(height: 20),

                        // 📝 Description
                        const Text(
                          "Description",
                          style: TextStyle(
                            fontSize: 18,
                            fontWeight: FontWeight.w600,
                          ),
                        ),
                        const SizedBox(height: 8),
                        Text(
                          description,
                          style: const TextStyle(
                            fontSize: 15,
                            color: Colors.black87,
                            height: 1.5,
                          ),
                        ),
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
            decoration: BoxDecoration(
              color: Colors.white,
              boxShadow: [
                BoxShadow(
                  color: Colors.black.withValues(alpha: 0.8),
                  blurRadius: 8,
                ),
              ],
            ),
            child: Row(
              children: [
                Expanded(
                  child: OutlinedButton(
                    onPressed: () {
                      // 🛒 Add to cart logic
                    },
                    style: OutlinedButton.styleFrom(
                      padding: const EdgeInsets.symmetric(vertical: 14),
                    ),
                    child: const Text("Add to Cart"),
                  ),
                ),
                const SizedBox(width: 12),
                Expanded(
                  child: ElevatedButton(
                    onPressed: () {
                      // 💳 Buy now logic
                    },
                    style: ElevatedButton.styleFrom(
                      padding: const EdgeInsets.symmetric(vertical: 14),
                    ),
                    child: const Text("Buy Now"),
                  ),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}
