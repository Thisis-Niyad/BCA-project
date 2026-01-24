import 'dart:convert';
import 'package:flutter/material.dart';
import 'package:flutter_app/config/api.dart';
import 'package:http/http.dart' as http;
import 'package:shared_preferences/shared_preferences.dart';

class Login extends StatefulWidget {
  const Login({super.key});

  @override
  State<Login> createState() => _LoginState();
}

class _LoginState extends State<Login> {
  final _formKey = GlobalKey<FormState>();
  final TextEditingController _emailController = TextEditingController();
  final TextEditingController _passwordController = TextEditingController();

  @override
  void dispose() {
    _emailController.dispose();
    _passwordController.dispose();
    super.dispose();
  }

  Future<Map<String, dynamic>> sendData() async {
    try {
      final response = await http.post(
        Uri.parse("${ApiConfig.baseUrl}/signin"),
        headers: {"Content-Type": "application/json"},
        body: jsonEncode({
          "email": _emailController.text,
          "password": _passwordController.text,
        }),
      );
      final Map<String, dynamic> data = jsonDecode(response.body);
      if (response.statusCode == 200) {
        final path = data["path"]?.toString();

        if (path == null || path.isEmpty) {
          const Map<String, dynamic> content = {
            "msg": "Invalid server response",
            "color": Colors.red,
          };
          return content;
        }

        final parts = path.split("/");

        if (parts.length < 3) {
          return {"msg": "Invalid server response", "color": Colors.red};
        }

        final actor = parts[1];
        final id = parts[2];
        if (actor != "user") {
          return {"msg": 'your not user', "color": Colors.red};
        }
        final prefs = await SharedPreferences.getInstance();
        await prefs.setString("userId", id);
        Future.delayed(const Duration(seconds: 2), () {
          if (!mounted) return;
          Navigator.pushNamedAndRemoveUntil(context, '/home', (route) => false);
        });

        return {"msg": "login successful", "color": Colors.green};
      } else {
        return {"msg": "server error somthing wrong", "color": Colors.red};
      }
    } catch (e) {
      return {"msg": "server error: e", "color": Colors.red};
    }
  }

  //   bool isValidEmail(String email) {
  //   return RegExp(r'^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$').hasMatch(email);
  // }
  @override
  Widget build(BuildContext context) {
    // final screenHeight = MediaQuery.of(context).size.height;
    return Scaffold(
      backgroundColor: Colors.white,
      appBar: AppBar(
        backgroundColor: const Color(0xFF6747FF),
        title: const Text(
          'Pixel Pact',
          style: TextStyle(color: Colors.white, fontWeight: FontWeight.w600),
        ),
      ),
      body: SingleChildScrollView(
        child: Container(
          // height: screenHeight,
          color: Colors.grey[100],
          child: Column(
            children: <Widget>[
              Container(
                color: Colors.white,
                child: Container(
                  decoration: const BoxDecoration(
                    color: Color(
                      0xFF6747FF,
                    ), // Color must be inside BoxDecoration
                    borderRadius: BorderRadius.only(
                      bottomRight: Radius.circular(60),
                    ), // Uniform circular radius
                  ),
                  child: const Padding(
                    padding: EdgeInsets.fromLTRB(10, 50, 10, 80),
                    child: Center(
                      child: Text(
                        'Log In',
                        style: TextStyle(
                          color: Colors.white,
                          fontSize: 32.0,
                          fontWeight: FontWeight.w600,
                        ),
                      ),
                    ),
                  ),
                ),
              ),
              Container(
                color: const Color(0xFF6747FF),
                child: Container(
                  padding: const EdgeInsets.fromLTRB(25, 30, 25, 30),
                  decoration: const BoxDecoration(
                    color: Colors.white, // Color must be inside BoxDecoration
                    borderRadius: BorderRadius.only(
                      topLeft: Radius.circular(90),
                    ), // Uniform circular radius
                  ),
                  child: Form(
                    key: _formKey,
                    child: Column(
                      children: [
                        TextFormField(
                          controller: _emailController,
                          validator: (value) {
                            if (value == null || value.isEmpty) {
                              return "Email required";
                            }
                            if (!RegExp(
                              r'^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$',
                            ).hasMatch(value)) {
                              return "Enter valid email";
                            }
                            return null;
                          },
                          decoration: const InputDecoration(
                            border: OutlineInputBorder(),
                            labelText: 'Email',
                          ),
                        ),
                        const SizedBox(height: 15),
                        TextFormField(
                          controller: _passwordController,
                          obscureText: true,
                          validator: (value) =>
                              value!.length < 8 ? "Min 8 characters" : null,
                          decoration: const InputDecoration(
                            border: OutlineInputBorder(),
                            labelText: 'Password',
                          ),
                        ),
                        const SizedBox(height: 20),
                        ElevatedButton(
                          style: ElevatedButton.styleFrom(
                            fixedSize: const Size(250, 40),
                            backgroundColor: const Color(0xFF6747FF),
                            foregroundColor: Colors.white,
                          ),
                          onPressed: () async {
                            if (_formKey.currentState!.validate()) {
                              final messenger = ScaffoldMessenger.of(context);
                              Map<String, dynamic> msg = await sendData();
                              messenger.showSnackBar(
                                SnackBar(
                                  backgroundColor: msg["color"],
                                  content: Text(msg["msg"]),
                                  duration: const Duration(seconds: 2),
                                ),
                              );
                            }
                          },
                          child: const Text("Submit"),
                        ),
                        const SizedBox(height: 50),
                        const Center(
                          child: Row(
                            mainAxisAlignment: MainAxisAlignment.center,
                            children: [
                              Text('Forgot your login details? '),

                              Padding(
                                padding: EdgeInsets.only(left: 1.0),
                                child: InkWell(
                                  child: Text(
                                    'Get help logging in.',
                                    style: TextStyle(
                                      fontSize: 14,
                                      color: Color(0xFF6747FF),
                                    ),
                                  ),
                                ),
                              ),
                            ],
                          ),
                        ),
                      ],
                    ),
                  ),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
