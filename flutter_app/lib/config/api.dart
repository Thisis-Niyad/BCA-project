// import 'dart:io' show Platform;
import 'package:flutter_dotenv/flutter_dotenv.dart';
import 'package:flutter/foundation.dart';

class ApiConfig {
  static String get baseUrl {
    // if (kIsWeb) {
    // debugPrint("web:${dotenv.env['WEB_URL']!}");
    // return dotenv.env['WEB_URL']!;
    // }
    // if (Platform.isAndroid) {
    //   debugPrint("emulator:${dotenv.env['ANDROID_URL']!}");
    //   return dotenv.env['ANDROID_URL']!;
    // }
    debugPrint("mobile:${dotenv.env['MOBILE_URL']!}");
    return dotenv.env['MOBILE_URL']!;
  }
}
