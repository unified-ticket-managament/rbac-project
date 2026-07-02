export type Language = "en" | "te" | "hi";

export const LANGUAGES: { value: Language; label: string }[] = [
  { value: "en", label: "English" },
  { value: "te", label: "తెలుగు" },
  { value: "hi", label: "हिन्दी" },
];

const en = {
  "nav.dashboard": "Dashboard",
  "nav.users": "Users",
  "nav.roles": "Roles",
  "nav.permissions": "Permissions",
  "nav.auditLogs": "Audit Logs",
  "nav.profile": "Profile",
  "nav.settings": "Settings",
  "nav.logout": "Logout",

  "navbar.searchPlaceholder": "Search pages...",
  "navbar.noResults": 'No pages match "{query}"',
  "navbar.notifications": "Notifications",
  "navbar.markAllRead": "Mark all as read",
  "navbar.allCaughtUp": "You're all caught up.",
  "navbar.myAccount": "My Account",

  "dashboard.welcome": "Welcome, {name}",
  "dashboard.subtitle": "Here's what's happening across your organization today.",
  "dashboard.quickActions": "Quick Actions",
  "dashboard.quickLinks": "Quick Links",
  "dashboard.recentActivity": "Recent Activity",
  "dashboard.recentActivities": "Recent Activities",
  "dashboard.recentUsers": "Recent Users",
  "dashboard.latestAuditLogs": "Latest Audit Logs",
  "dashboard.totalUsers": "Total Users",
  "dashboard.totalRoles": "Total Roles",
  "dashboard.totalPermissions": "Total Permissions",
  "dashboard.auditLogsStat": "Audit Logs",
  "dashboard.tasks": "Tasks",
  "dashboard.projects": "Projects",
  "dashboard.weeklyLoginActivity": "Weekly Login Activity",
  "dashboard.usersByRole": "Users by Role",
  "dashboard.profileSummary": "Profile Summary",
  "dashboard.viewAll": "View all",
  "dashboard.addUser": "Add User",
  "dashboard.addUserDesc": "Invite a new team member",
  "dashboard.createRole": "Create Role",
  "dashboard.createRoleDesc": "Define a new access role",
  "dashboard.managePermissions": "Manage Permissions",
  "dashboard.managePermissionsDesc": "Update role capabilities",
  "dashboard.viewAuditLogs": "View Audit Logs",
  "dashboard.viewAuditLogsDesc": "Review recent activity",
  "dashboard.viewProfile": "View Profile",
  "dashboard.viewProfileDesc": "See your account details",
  "dashboard.settingsDesc": "Manage preferences & security",
  "dashboard.viewUsers": "View Users",
  "dashboard.viewUsersDesc": "See your team members",

  "users.title": "Users",
  "users.description": "Manage your organization's users",
  "users.createButton": "Create User",

  "roles.title": "Roles",
  "roles.description": "Manage access roles across your organization",

  "permissions.title": "Permissions",
  "permissions.description": "Assign granular permissions to each role.",

  "auditLogs.title": "Audit Logs",
  "auditLogs.description": "A detailed record of activity across your organization",

  "settings.title": "Settings",
  "settings.description": "Manage your account, appearance, notifications, and security preferences.",
  "settings.accountSettings": "Account Settings",
  "settings.theme": "Theme",
  "settings.notifications": "Notifications",
  "settings.language": "Language",
  "settings.security": "Security",
  "settings.sessionManagement": "Session Management",

  "profile.title": "Profile",
  "profile.description": "View your account information",
  "profile.email": "Email",
  "profile.role": "Role",
  "profile.phone": "Phone",
  "profile.department": "Department",
  "profile.joinedDate": "Joined Date",
  "profile.address": "Address",
  "profile.notSet": "Not set",
  "profile.orgChart": "Organization Chart",

  "common.total": "total",
};

const te: Record<keyof typeof en, string> = {
  "nav.dashboard": "డాష్‌బోర్డ్",
  "nav.users": "వినియోగదారులు",
  "nav.roles": "పాత్రలు",
  "nav.permissions": "అనుమతులు",
  "nav.auditLogs": "ఆడిట్ లాగ్‌లు",
  "nav.profile": "ప్రొఫైల్",
  "nav.settings": "సెట్టింగ్‌లు",
  "nav.logout": "లాగ్ అవుట్",

  "navbar.searchPlaceholder": "పేజీలను శోధించండి...",
  "navbar.noResults": '"{query}" కి సరిపోలే పేజీలు లేవు',
  "navbar.notifications": "నోటిఫికేషన్‌లు",
  "navbar.markAllRead": "అన్నింటినీ చదివినట్లు గుర్తించండి",
  "navbar.allCaughtUp": "మీరు అన్నీ చూశారు.",
  "navbar.myAccount": "నా ఖాతా",

  "dashboard.welcome": "స్వాగతం, {name}",
  "dashboard.subtitle": "మీ సంస్థ అంతటా ఈ రోజు ఏమి జరుగుతుందో ఇక్కడ ఉంది.",
  "dashboard.quickActions": "త్వరిత చర్యలు",
  "dashboard.quickLinks": "త్వరిత లింక్‌లు",
  "dashboard.recentActivity": "ఇటీవలి కార్యాచరణ",
  "dashboard.recentActivities": "ఇటీవలి కార్యకలాపాలు",
  "dashboard.recentUsers": "ఇటీవలి వినియోగదారులు",
  "dashboard.latestAuditLogs": "తాజా ఆడిట్ లాగ్‌లు",
  "dashboard.totalUsers": "మొత్తం వినియోగదారులు",
  "dashboard.totalRoles": "మొత్తం పాత్రలు",
  "dashboard.totalPermissions": "మొత్తం అనుమతులు",
  "dashboard.auditLogsStat": "ఆడిట్ లాగ్‌లు",
  "dashboard.tasks": "పనులు",
  "dashboard.projects": "ప్రాజెక్టులు",
  "dashboard.weeklyLoginActivity": "వారపు లాగిన్ కార్యాచరణ",
  "dashboard.usersByRole": "పాత్ర వారీగా వినియోగదారులు",
  "dashboard.profileSummary": "ప్రొఫైల్ సారాంశం",
  "dashboard.viewAll": "అన్నీ చూడండి",
  "dashboard.addUser": "వినియోగదారుని జోడించండి",
  "dashboard.addUserDesc": "కొత్త బృంద సభ్యుడిని ఆహ్వానించండి",
  "dashboard.createRole": "పాత్రను సృష్టించండి",
  "dashboard.createRoleDesc": "కొత్త యాక్సెస్ పాత్రను నిర్వచించండి",
  "dashboard.managePermissions": "అనుమతులను నిర్వహించండి",
  "dashboard.managePermissionsDesc": "పాత్ర సామర్థ్యాలను నవీకరించండి",
  "dashboard.viewAuditLogs": "ఆడిట్ లాగ్‌లను చూడండి",
  "dashboard.viewAuditLogsDesc": "ఇటీవలి కార్యాచరణను సమీక్షించండి",
  "dashboard.viewProfile": "ప్రొఫైల్ చూడండి",
  "dashboard.viewProfileDesc": "మీ ఖాతా వివరాలను చూడండి",
  "dashboard.settingsDesc": "ప్రాధాన్యతలు & భద్రతను నిర్వహించండి",
  "dashboard.viewUsers": "వినియోగదారులను చూడండి",
  "dashboard.viewUsersDesc": "మీ బృంద సభ్యులను చూడండి",

  "users.title": "వినియోగదారులు",
  "users.description": "మీ సంస్థ యొక్క వినియోగదారులను నిర్వహించండి",
  "users.createButton": "వినియోగదారుని సృష్టించండి",

  "roles.title": "పాత్రలు",
  "roles.description": "మీ సంస్థ అంతటా యాక్సెస్ పాత్రలను నిర్వహించండి",

  "permissions.title": "అనుమతులు",
  "permissions.description": "ప్రతి పాత్రకు నిర్దిష్ట అనుమతులను కేటాయించండి.",

  "auditLogs.title": "ఆడిట్ లాగ్‌లు",
  "auditLogs.description": "మీ సంస్థ అంతటా కార్యాచరణ యొక్క వివరణాత్మక రికార్డు",

  "settings.title": "సెట్టింగ్‌లు",
  "settings.description": "మీ ఖాతా, రూపాన్ని, నోటిఫికేషన్‌లు మరియు భద్రతా ప్రాధాన్యతలను నిర్వహించండి.",
  "settings.accountSettings": "ఖాతా సెట్టింగ్‌లు",
  "settings.theme": "థీమ్",
  "settings.notifications": "నోటిఫికేషన్‌లు",
  "settings.language": "భాష",
  "settings.security": "భద్రత",
  "settings.sessionManagement": "సెషన్ నిర్వహణ",

  "profile.title": "ప్రొఫైల్",
  "profile.description": "మీ ఖాతా సమాచారాన్ని వీక్షించండి",
  "profile.email": "ఇమెయిల్",
  "profile.role": "పాత్ర",
  "profile.phone": "ఫోన్",
  "profile.department": "విభాగం",
  "profile.joinedDate": "చేరిన తేదీ",
  "profile.address": "చిరునామా",
  "profile.notSet": "సెట్ చేయలేదు",
  "profile.orgChart": "సంస్థ చార్ట్",

  "common.total": "మొత్తం",
};

const hi: Record<keyof typeof en, string> = {
  "nav.dashboard": "डैशबोर्ड",
  "nav.users": "उपयोगकर्ता",
  "nav.roles": "भूमिकाएं",
  "nav.permissions": "अनुमतियां",
  "nav.auditLogs": "ऑडिट लॉग",
  "nav.profile": "प्रोफ़ाइल",
  "nav.settings": "सेटिंग्स",
  "nav.logout": "लॉग आउट",

  "navbar.searchPlaceholder": "पेज खोजें...",
  "navbar.noResults": '"{query}" से मेल खाने वाला कोई पेज नहीं',
  "navbar.notifications": "सूचनाएं",
  "navbar.markAllRead": "सभी को पढ़ा हुआ चिह्नित करें",
  "navbar.allCaughtUp": "आप सब कुछ देख चुके हैं।",
  "navbar.myAccount": "मेरा खाता",

  "dashboard.welcome": "स्वागत है, {name}",
  "dashboard.subtitle": "आज आपके संगठन में क्या हो रहा है, यहां देखें।",
  "dashboard.quickActions": "त्वरित कार्य",
  "dashboard.quickLinks": "त्वरित लिंक",
  "dashboard.recentActivity": "हाल की गतिविधि",
  "dashboard.recentActivities": "हाल की गतिविधियां",
  "dashboard.recentUsers": "हाल के उपयोगकर्ता",
  "dashboard.latestAuditLogs": "नवीनतम ऑडिट लॉग",
  "dashboard.totalUsers": "कुल उपयोगकर्ता",
  "dashboard.totalRoles": "कुल भूमिकाएं",
  "dashboard.totalPermissions": "कुल अनुमतियां",
  "dashboard.auditLogsStat": "ऑडिट लॉग",
  "dashboard.tasks": "कार्य",
  "dashboard.projects": "परियोजनाएं",
  "dashboard.weeklyLoginActivity": "साप्ताहिक लॉगिन गतिविधि",
  "dashboard.usersByRole": "भूमिका के अनुसार उपयोगकर्ता",
  "dashboard.profileSummary": "प्रोफ़ाइल सारांश",
  "dashboard.viewAll": "सभी देखें",
  "dashboard.addUser": "उपयोगकर्ता जोड़ें",
  "dashboard.addUserDesc": "एक नए टीम सदस्य को आमंत्रित करें",
  "dashboard.createRole": "भूमिका बनाएं",
  "dashboard.createRoleDesc": "एक नई एक्सेस भूमिका परिभाषित करें",
  "dashboard.managePermissions": "अनुमतियां प्रबंधित करें",
  "dashboard.managePermissionsDesc": "भूमिका क्षमताओं को अपडेट करें",
  "dashboard.viewAuditLogs": "ऑडिट लॉग देखें",
  "dashboard.viewAuditLogsDesc": "हाल की गतिविधि की समीक्षा करें",
  "dashboard.viewProfile": "प्रोफ़ाइल देखें",
  "dashboard.viewProfileDesc": "अपने खाते का विवरण देखें",
  "dashboard.settingsDesc": "प्राथमिकताएं और सुरक्षा प्रबंधित करें",
  "dashboard.viewUsers": "उपयोगकर्ता देखें",
  "dashboard.viewUsersDesc": "अपने टीम सदस्यों को देखें",

  "users.title": "उपयोगकर्ता",
  "users.description": "अपने संगठन के उपयोगकर्ताओं को प्रबंधित करें",
  "users.createButton": "उपयोगकर्ता बनाएं",

  "roles.title": "भूमिकाएं",
  "roles.description": "अपने संगठन में एक्सेस भूमिकाओं को प्रबंधित करें",

  "permissions.title": "अनुमतियां",
  "permissions.description": "प्रत्येक भूमिका को विस्तृत अनुमतियां असाइन करें।",

  "auditLogs.title": "ऑडिट लॉग",
  "auditLogs.description": "आपके संगठन में गतिविधि का विस्तृत रिकॉर्ड",

  "settings.title": "सेटिंग्स",
  "settings.description": "अपने खाते, स्वरूप, सूचनाओं और सुरक्षा प्राथमिकताओं को प्रबंधित करें।",
  "settings.accountSettings": "खाता सेटिंग्स",
  "settings.theme": "थीम",
  "settings.notifications": "सूचनाएं",
  "settings.language": "भाषा",
  "settings.security": "सुरक्षा",
  "settings.sessionManagement": "सत्र प्रबंधन",

  "profile.title": "प्रोफ़ाइल",
  "profile.description": "अपनी खाता जानकारी देखें",
  "profile.email": "ईमेल",
  "profile.role": "भूमिका",
  "profile.phone": "फ़ोन",
  "profile.department": "विभाग",
  "profile.joinedDate": "शामिल होने की तारीख",
  "profile.address": "पता",
  "profile.notSet": "सेट नहीं है",
  "profile.orgChart": "संगठन चार्ट",

  "common.total": "कुल",
};

export const TRANSLATIONS: Record<Language, Record<string, string>> = { en, te, hi };

export type TranslationKey = keyof typeof en;

export function translate(
  language: Language,
  key: TranslationKey,
  params?: Record<string, string | number>
): string {
  const dictionary = TRANSLATIONS[language] ?? TRANSLATIONS.en;
  let value = dictionary[key] ?? TRANSLATIONS.en[key] ?? key;

  if (params) {
    for (const [paramKey, paramValue] of Object.entries(params)) {
      value = value.replace(new RegExp(`\\{${paramKey}\\}`, "g"), String(paramValue));
    }
  }

  return value;
}
