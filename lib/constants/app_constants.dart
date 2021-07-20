import 'dart:ui';

import 'package:flutter/material.dart';
import 'package:url_launcher/url_launcher.dart';

import '../widget_barrel.dart';

const Color BANNER_BG_COLOR = Color(0xFFECF0FF);
const String BANNER_PERSON_NAME = 'Kenneth P Mogopodi';
const String TITLE_PERSON_NAME = 'Kenneth Mogopodi';

const String PORTFOLIO_IMG = 'assets/portfolio_img.jpg';
const List<String> DESIGNATIONS = [
  'Android Developer.',
  'Flutter Developer.',
];

const String ABOUT_ME_DESC =
    'Creative and passionate Computer Science Student experienced in a wide range of programming languages and technologies. Arsenal of skills include Java, Flutter(Dart), Firebase, Python, Javascript, Flutter Web. Fast at learning new tech and adapting to an ever changing environment. Sperb work ethics and team work skilled.';

const String DOWNLOAD_CV_URL =
    'https://drive.google.com/file/d/1buBWoNFQ7UytaSSTuZy8vjpLN_HaQdvD/view?usp=sharing';

const List<String> ABOUT_ME_LABELS = [
  'Name:',
  'Date of Birth:',
  'Location:',
  'Email:',
  'Phone:',
];

const List<String> ABOUT_ME_VALUES = [
  'Kenneth Phatsimo Mogopodi',
  'August 29, 1999',
  'Botswana, South East, Gaborone',
  'kennethmogopodi@gmail.com',
  '+267 76-715-717',
];

const PROJECT_COMPLETE_COUNT = '10+';

TextStyle kAboutMeValuesStyle =
    TextStyle(fontSize: 16, fontWeight: FontWeight.w400, color: Colors.grey);

TextStyle kAboutMeLabelsTextStyle =
    TextStyle(fontSize: 16, fontWeight: FontWeight.w600);

const List<String> kSkillsAssets = [
  //'assets/microsoft.png',
  'assets/android.png',
  'assets/java.png',
  'assets/google.png',
  'assets/flutter.png',
  //'assets/medium.png',
];

const List<String> kWorksAssets = [
  'assets/ss1.png',
  'assets/ss2.png',
  'assets/ss3.png',
  'assets/ss4.png',
  'assets/ss5.png',
  'assets/ss6.png',
  'assets/ss7.png',
  'assets/ss8.png',
  'assets/ss9.png',
  'assets/ss10.png',
  'assets/ss11.png',
  'assets/ss12.png',
  'assets/ss13.png',
  'assets/ss14.png',
];

const List<ResumeModel> kEducation = [
  ResumeModel(
      period: '2018-2022',
      title: 'Bachelor of Scince (Hons) in Computer Systems Engineering',
      place:
          'Botswana Accountancy College in collabo with University of Sunderland',
      description:
          'Pursued electronic & communication engineering and got my hand on software development with Java, Artificial Intelligence, Computer Networks and Network Sercurity, Native Android Development and Web Dev, just to name few.'),
  ResumeModel(
      period: '2016-2017',
      title: 'Senior Secondary Education',
      place: 'St Joseph’s College',
      description:
          'Completed my senior school with a General Certificate in Secondary Education'),
  ResumeModel(
      period: '2013-2015',
      title: 'Junior Secondary Education',
      place: 'Tloga Tloga Jnr Secondary School',
      description:
          'Completed and passed jnr school with a Junior Certificate of Secondary Education'),
];

const List<ResumeModel> kExperience = [
  ResumeModel(
      period: 'JAN 2021 - Present',
      title: 'Intern Developer',
      place: 'Digital Natives',
      description:
          'Worked on mobile application developmet with Flutter and Web Development with React. Got to use Firebase services as backend for both mobile and web apps.'),
  /* ResumeModel(
      period: 'JUL 2017 - MAR 2019',
      title: 'Android Developer',
      place: 'Messiah software solutions pvt. Ltd',
      description:
          'Started my career as a Android developer trainee in this organisation then im promoted to work on projects which gave me great knowledge in certain domains.'),*/
];

const List<ResumeModel> kCertifications = [
  ResumeModel(
      period: '2020',
      title: 'Flutter Development Bootcamp with Dart',
      place: 'Udemy',
      description:
          'A deep dive into flutter development learnt to build complex UI elements and got a great experience in state management of flutter application.'),
  ResumeModel(
    period: '2020',
    title: '6 months training for an Associate Android Developer Certification',
    place: 'Pluralsight',
    description:
        'Enhanced knowledge and skill in native android development with Java and Kotlin.',
  )
];

List<ContactMeModel> kContactMe = [
  ContactMeModel(
      title: 'Email Address',
      userName: 'kennethmogopodi@gmail.com',
      icon: Icons.mail_rounded,
      onClick: () async {
        await launch(
            'https://mail.google.com/mail/?view=cm&fs=1&to=kennethmogopodi@gmail.com&su=&body=');
      }),
  /*ContactMeModel(
      title: 'Facebook',
      userName: 'MohanKumar',
      icon: FontAwesome.facebook_f,
      onClick: () async {
        await launch('https://www.facebook.com/mowglie.pop/');
      }),*/
  ContactMeModel(
      title: 'Github',
      userName: 'Kenneth-29',
      icon: FontAwesome.github,
      onClick: () async {
        await launch('https://github.com/Kenneth-29');
      }),
  ContactMeModel(
      title: 'LinkedIn',
      userName: 'Kenneth Phatsimo Mogopodi',
      icon: FontAwesome.linkedin,
      onClick: () async {
        await launch('https://www.linkedin.com/in/kenneth-mogopodi/');
      }),
  /*ContactMeModel(
      title: 'Medium',
      userName: 'mohan-smk23',
      icon: FontAwesome.medium,
      onClick: () async {
        await launch('https://mohan-smk23.medium.com/');
      }),*/
  /*ContactMeModel(
      title: 'Stack Overflow',
      userName: 'Mohankumar',
      icon: FontAwesome.medium,
      onClick: () async {
        await launch('https://stackoverflow.com/users/9882579/mohankumar');
      }),*/
];

List<SkillsModel> kSkills = [
  SkillsModel('Native Android', 90),
  SkillsModel('Flutter', 90),
  SkillsModel('Material design', 90),
  SkillsModel('Firebase', 75),
  SkillsModel('ReactJs', 65)
];

class ResumeModel {
  final String period;
  final String title;
  final String place;
  final String description;

  const ResumeModel({this.period, this.title, this.place, this.description});
}

class ContactMeModel {
  final String title;
  final String userName;
  final IconData icon;
  final Function onClick;

  const ContactMeModel({this.title, this.userName, this.icon, this.onClick});
}

class SkillsModel {
  final String name;
  final int percentage;

  SkillsModel(this.name, this.percentage)
      : assert(percentage <= 100, "Skill percentage must be less than 100 ");
}
