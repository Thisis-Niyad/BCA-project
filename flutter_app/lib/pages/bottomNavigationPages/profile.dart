import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';
import 'package:flutter_app/config/api.dart';
import 'package:shared_preferences/shared_preferences.dart';

class Profile extends StatefulWidget {
  const Profile({super.key});

  @override
  State<Profile> createState() => _ProfilePageState();
}

class _ProfilePageState extends State<Profile> {
  late Future<Map<String, dynamic>> userFuture;

  @override
  void initState() {
    super.initState();
    userFuture = fetchProfile();
  }

  // 🔗 Fetch profile from backend
  Future<Map<String, dynamic>> fetchProfile() async {
    final prefs = await SharedPreferences.getInstance();
    String? userId = prefs.getString("userId");
    final response = await http.get(
      Uri.parse('${ApiConfig.baseUrl}/app/$userId/profile'),
      // headers: {
      //   'Authorization': 'Bearer YOUR_TOKEN_HERE', // optional
      // },
    );

    if (response.statusCode == 200) {
      final data = json.decode(response.body);
      return {
        "name": data['Name'] ?? '',
        "email": data['email'] ?? '',
        "phone": data['phone'] ?? '',
        "address": data['address'] ?? '',
        "gender": data['gender'] ?? '',
        "state": data['state'] ?? '',
        "town": data['town'] ?? '',
        "pin": data['pin']?.toString() ?? '',
        "dob": data['DOB'] ?? '',
        "profileImg": data['profileImg'] ?? '',
      };
    } else {
      throw Exception('Failed to load profile');
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Profile'),
        centerTitle: true,
        // actions: [IconButton(icon: const Icon(Icons.edit), onPressed: () {})],
      ),
      body: FutureBuilder<Map<String, dynamic>>(
        future: userFuture,
        builder: (context, snapshot) {
          if (snapshot.connectionState == ConnectionState.waiting) {
            return const Center(child: CircularProgressIndicator());
          }
          if (snapshot.hasError) {
            return const Center(child: Text('Failed to load profile'));
          }

          final user = snapshot.data!;

          return SingleChildScrollView(
            padding: const EdgeInsets.all(16),
            child: Column(
              children: [
                CircleAvatar(
                  radius: 55,
                  backgroundImage: user['profileImg'].isNotEmpty
                      ? NetworkImage(user['profileImg'])
                      : null,
                  child: user['profileImg'].isEmpty
                      ? const Icon(Icons.person, size: 60)
                      : null,
                ),
                const SizedBox(height: 12),

                Text(
                  user['name'],
                  style: const TextStyle(
                    fontSize: 22,
                    fontWeight: FontWeight.bold,
                  ),
                ),
                Text(user['email'], style: const TextStyle(color: Colors.grey)),

                const SizedBox(height: 24),

                ProfileTile(
                  icon: Icons.phone,
                  label: 'Phone',
                  value: user['phone'],
                ),
                ProfileTile(
                  icon: Icons.home,
                  label: 'Address',
                  value: user['address'],
                ),
                ProfileTile(
                  icon: Icons.person,
                  label: 'Gender',
                  value: user['gender'],
                ),
                ProfileTile(
                  icon: Icons.map,
                  label: 'State',
                  value: user['state'],
                ),
                ProfileTile(
                  icon: Icons.location_city,
                  label: 'Town',
                  value: user['town'],
                ),
                ProfileTile(
                  icon: Icons.pin_drop,
                  label: 'PIN',
                  value: user['pin'],
                ),
                ProfileTile(
                  icon: Icons.cake,
                  label: 'Date of Birth',
                  value: user['dob'],
                ),

                const SizedBox(height: 30),

                ElevatedButton.icon(
                  icon: const Icon(Icons.logout),
                  label: const Text('Logout'),
                  style: ElevatedButton.styleFrom(
                    backgroundColor: Colors.red,
                    minimumSize: const Size(double.infinity, 48),
                  ),
                  onPressed: () {},
                ),
              ],
            ),
          );
        },
      ),
    );
  }
}

class ProfileTile extends StatelessWidget {
  final IconData icon;
  final String label;
  final String value;

  const ProfileTile({
    super.key,
    required this.icon,
    required this.label,
    required this.value,
  });

  @override
  Widget build(BuildContext context) {
    return Card(
      elevation: 2,
      margin: const EdgeInsets.symmetric(vertical: 6),
      child: ListTile(
        leading: Icon(icon, color: Theme.of(context).primaryColor),
        title: Text(label),
        subtitle: Text(value.isEmpty ? 'Not provided' : value),
      ),
    );
  }
}
