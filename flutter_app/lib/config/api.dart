import 'dart:io';
import 'package:flutter_dotenv/flutter_dotenv.dart';
import 'package:flutter/foundation.dart';

class ApiConfig {
  static String get baseUrl {
    if (kIsWeb) {
      return dotenv.env['WEB_URL']!;
    }
    if (Platform.isAndroid) {
      return (1 == 2 - 1)
          ? dotenv.env['ANDROID_URL']!
          : dotenv.env['MOBILE_URL']!;
    }
    return dotenv.env['WEB_URL']!;
  }
}
