import 'package:flutter/material.dart';

class Login extends StatefulWidget {
  const Login({super.key});

  @override
  State<Login> createState() => _LoginState();
}

class _LoginState extends State<Login> {
  // void sendData()async{
  //   try{

  //   }catch(e){

  //   }
  // }
  @override
  Widget build(BuildContext context) {
    final screenHeight = MediaQuery.of(context).size.height;
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
          height: screenHeight,
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
                  child: Column(
                    children: [
                      Padding(
                        //padding: const EdgeInsets.only(left:15.0,right: 15.0,top:0,bottom: 0),
                        padding: EdgeInsets.symmetric(horizontal: 15),
                        child: TextField(
                          decoration: InputDecoration(
                            border: OutlineInputBorder(),
                            labelText: 'email',
                            hintText: 'Enter valid email id as abc@gmail.com',
                          ),
                        ),
                      ),
                      Padding(
                        padding: const EdgeInsets.only(
                          left: 15.0,
                          right: 15.0,
                          top: 15,
                          bottom: 0,
                        ),
                        //padding: EdgeInsets.symmetric(horizontal: 15),
                        child: TextField(
                          obscureText: true,
                          decoration: InputDecoration(
                            border: OutlineInputBorder(),
                            labelText: 'Password',
                            hintText: 'Enter secure password',
                          ),
                        ),
                      ),

                      SizedBox(
                        height: 65,
                        width: 360,
                        child: Padding(
                          padding: const EdgeInsets.only(top: 20.0),
                          child: ElevatedButton(
                            style: ElevatedButton.styleFrom(
                              backgroundColor: const Color(0xFF6747FF),
                              foregroundColor: Colors.white,
                            ),
                            child: Text(
                              'Submit ',
                              style: TextStyle(fontSize: 20),
                            ),
                            onPressed: () {
                              // print('Successfully log in ');
                            },
                          ),
                        ),
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
                                onTap: () {
                                  // print('hello');
                                },
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
            ],
          ),
        ),
      ),
    );
  }
}
