import 'package:flutter/material.dart';

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
  // void sendData()async{
  //   try{

  //   }catch(e){

  //   }
  // }
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
        title: Text(
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
                  decoration: BoxDecoration(
                    color: const Color(
                      0xFF6747FF,
                    ), // Color must be inside BoxDecoration
                    borderRadius: BorderRadius.only(
                      bottomRight: Radius.circular(60),
                    ), // Uniform circular radius
                  ),
                  child: Padding(
                    padding: const EdgeInsets.fromLTRB(10, 50, 10, 80),
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
                  padding: EdgeInsets.fromLTRB(25, 30, 25, 30),
                  decoration: BoxDecoration(
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
                          onPressed: () {
                            if (_formKey.currentState!.validate()) {
                              debugPrint(_emailController.text);
                              debugPrint(_passwordController.text);
                            }
                          },
                          child: const Text("Submit"),
                        ),
                        SizedBox(height: 50),
                        Center(
                          child: Row(
                            mainAxisAlignment: MainAxisAlignment.center,
                            children: [
                              Text('Forgot your login details? '),

                              Padding(
                                padding: const EdgeInsets.only(left: 1.0),
                                child: InkWell(
                                  child: Text(
                                    'Get help logging in.',
                                    style: TextStyle(
                                      fontSize: 14,
                                      color: const Color(0xFF6747FF),
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
