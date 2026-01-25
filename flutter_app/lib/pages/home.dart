// PixelPact Home Page UI (Flutter)
// A modern, clean home screen showing artist artwork cards with search, app bar, and bottom navigation

import 'package:flutter/material.dart';
import 'package:flutter_app/pages/bottomNavigationPages/profile.dart';
import 'package:flutter_app/pages/bottomNavigationPages/dashboard.dart';
import 'package:flutter_app/pages/bottomNavigationPages/artistlistpage.dart';
import 'package:flutter_app/pages/bottomNavigationPages/cartpage.dart';

class Home extends StatefulWidget {
  const Home({super.key});

  @override
  State<Home> createState() => _HomePageState();
}

class _HomePageState extends State<Home> {
  int _currentIndex = 0;
  final List<Widget> _pages = const [
    Dashboard(),
    ArtistListPage(),
    CartPage(),
    Profile(),
    Profile(),
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color(0xfff7f7f7),
      appBar: AppBar(
        elevation: 0,
        backgroundColor: const Color(0xFF6747FF),
        title: const Text(
          'PixelPact',
          style: TextStyle(
            color: Colors.white,
            fontWeight: FontWeight.bold,
            fontSize: 22,
          ),
        ),
        actions: [
          IconButton(
            icon: const Icon(Icons.notifications_none, color: Colors.white),
            onPressed: () {},
          ),
          const SizedBox(width: 8),
        ],
      ),

      body: IndexedStack(index: _currentIndex, children: _pages),
      // Bottom Navigation
      bottomNavigationBar: BottomNavigationBar(
        currentIndex: _currentIndex,
        onTap: (index) {
          setState(() => _currentIndex = index);
        },
        type: BottomNavigationBarType.fixed,
        backgroundColor: const Color(0xFF6747FF),
        selectedIconTheme: const IconThemeData(size: 30.0),
        selectedItemColor: Colors.white,
        unselectedItemColor: Colors.grey,
        items: const [
          BottomNavigationBarItem(icon: Icon(Icons.home), label: 'Home'),
          BottomNavigationBarItem(
            icon: Icon(Icons.people_alt),
            label: 'Explore Artist',
          ),
          BottomNavigationBarItem(icon: Icon(Icons.shopify), label: 'My Cart'),
          BottomNavigationBarItem(
            icon: Icon(Icons.local_shipping),
            label: 'Orders',
          ),
          BottomNavigationBarItem(icon: Icon(Icons.person), label: 'Profile'),
        ],
      ),
    );
  }
}

// Artwork Card Widget
