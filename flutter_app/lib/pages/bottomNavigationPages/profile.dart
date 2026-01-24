import 'package:flutter/material.dart';

class Profile extends StatelessWidget {
  const Profile({super.key});

  @override
  Widget build(BuildContext context) {
    // Demo user data (later replace with API / SharedPreferences)
    final user = {
      "name": "Muhammed Niyad",
      "email": "niyad@email.com",
      "phone": "+91 9876543210",
      "address": "Calicut, Kerala",
      "gender": "Male",
      "state": "Kerala",
      "town": "Kozhikode",
      "pin": "673001",
      "dob": "12-05-2002",
      "profileImg": "",
    };

    return Scaffold(
      appBar: AppBar(
        title: const Text('Profile'),
        centerTitle: true,
        actions: [
          IconButton(
            icon: const Icon(Icons.edit),
            onPressed: () {}, // navigate to edit profile
          ),
        ],
      ),
      body: SingleChildScrollView(
        padding: const EdgeInsets.all(16),
        child: Column(
          children: [
            // Profile Image
            CircleAvatar(
              radius: 55,
              backgroundImage: user['profileImg']!.isNotEmpty
                  ? NetworkImage(user['profileImg']!)
                  : null,
              child: user['profileImg']!.isEmpty
                  ? const Icon(Icons.person, size: 60)
                  : null,
            ),
            const SizedBox(height: 12),

            Text(
              user['name']!,
              style: const TextStyle(fontSize: 22, fontWeight: FontWeight.bold),
            ),
            Text(user['email']!, style: const TextStyle(color: Colors.grey)),

            const SizedBox(height: 24),

            ProfileTile(
              icon: Icons.phone,
              label: 'Phone',
              value: user['phone']!,
            ),
            ProfileTile(
              icon: Icons.home,
              label: 'Address',
              value: user['address']!,
            ),
            ProfileTile(
              icon: Icons.person,
              label: 'Gender',
              value: user['gender']!,
            ),
            ProfileTile(icon: Icons.map, label: 'State', value: user['state']!),
            ProfileTile(
              icon: Icons.location_city,
              label: 'Town',
              value: user['town']!,
            ),
            ProfileTile(
              icon: Icons.pin_drop,
              label: 'PIN',
              value: user['pin']!,
            ),
            ProfileTile(
              icon: Icons.cake,
              label: 'Date of Birth',
              value: user['dob']!,
            ),

            const SizedBox(height: 30),

            ElevatedButton.icon(
              icon: const Icon(Icons.logout),
              label: const Text('Logout'),
              style: ElevatedButton.styleFrom(
                backgroundColor: Colors.red,
                minimumSize: const Size(double.infinity, 48),
              ),
              onPressed: () {}, // logout logic
            ),
          ],
        ),
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
