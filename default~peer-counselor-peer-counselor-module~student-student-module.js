(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~peer-counselor-peer-counselor-module~student-student-module"],{

/***/ "vaJ0":
/*!*********************************************************!*\
  !*** ./src/app/core/services/peer-counselor.service.ts ***!
  \*********************************************************/
/*! exports provided: PeerCounselorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeerCounselorService", function() { return PeerCounselorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/user.model */ "PQuL");



class PeerCounselorService {
    constructor() {
        this.counselors = [
            {
                id: 'pc-001',
                email: 'jane.mwangi@kca.ac.ke',
                firstName: 'Jane',
                lastName: 'Mwangi',
                role: _models_user_model__WEBPACK_IMPORTED_MODULE_1__["UserRole"].PEER_COUNSELOR,
                campus: _models_user_model__WEBPACK_IMPORTED_MODULE_1__["Campus"].RUARAKA,
                avatarUrl: 'assets/images/avatars/counselor-1.jpg',
                studentId: 'CS/2021/045',
                isActive: true,
                createdAt: new Date('2023-02-15'),
                trainingStatus: _models_user_model__WEBPACK_IMPORTED_MODULE_1__["TrainingStatus"].CERTIFIED,
                trainingCompletedAt: new Date('2023-08-20'),
                supportAreas: [
                    _models_user_model__WEBPACK_IMPORTED_MODULE_1__["SupportArea"].ACADEMIC_PRESSURE,
                    _models_user_model__WEBPACK_IMPORTED_MODULE_1__["SupportArea"].STRESS_MANAGEMENT,
                    _models_user_model__WEBPACK_IMPORTED_MODULE_1__["SupportArea"].ANXIETY_WORRY
                ],
                availability: [
                    { dayOfWeek: 1, startTime: '14:00', endTime: '17:00', isVirtual: true },
                    { dayOfWeek: 3, startTime: '10:00', endTime: '13:00', isVirtual: false, location: 'Student Center Room 204' },
                    { dayOfWeek: 5, startTime: '15:00', endTime: '18:00', isVirtual: true }
                ],
                virtualSupportAvailable: true,
                supervisorId: 'gs-001',
                bio: 'Final year Computer Science student passionate about mental health advocacy. Certified peer counselor with focus on academic stress and anxiety management.',
                languages: ['English', 'Swahili', 'Kikuyu'],
                rating: 4.8,
                totalSessions: 127
            },
            {
                id: 'pc-002',
                email: 'david.ochieng@kca.ac.ke',
                firstName: 'David',
                lastName: 'Ochieng',
                role: _models_user_model__WEBPACK_IMPORTED_MODULE_1__["UserRole"].PEER_COUNSELOR,
                campus: _models_user_model__WEBPACK_IMPORTED_MODULE_1__["Campus"].TOWN,
                avatarUrl: 'assets/images/avatars/counselor-2.jpg',
                studentId: 'BS/2020/112',
                isActive: true,
                createdAt: new Date('2022-09-10'),
                trainingStatus: _models_user_model__WEBPACK_IMPORTED_MODULE_1__["TrainingStatus"].CERTIFIED,
                trainingCompletedAt: new Date('2023-03-15'),
                supportAreas: [
                    _models_user_model__WEBPACK_IMPORTED_MODULE_1__["SupportArea"].RELATIONSHIP,
                    _models_user_model__WEBPACK_IMPORTED_MODULE_1__["SupportArea"].FRIENDSHIP_SOCIAL,
                    _models_user_model__WEBPACK_IMPORTED_MODULE_1__["SupportArea"].ADJUSTMENT
                ],
                availability: [
                    { dayOfWeek: 2, startTime: '16:00', endTime: '19:00', isVirtual: true },
                    { dayOfWeek: 4, startTime: '14:00', endTime: '17:00', isVirtual: false, location: 'Town Campus Counseling Office' }
                ],
                virtualSupportAvailable: true,
                supervisorId: 'gs-002',
                bio: 'Business Studies graduate pursuing MBA. Specializes in relationship counseling and social adjustment for first-year students.',
                languages: ['English', 'Swahili', 'Luo'],
                rating: 4.6,
                totalSessions: 98
            },
            {
                id: 'pc-003',
                email: 'amira.hassan@kca.ac.ke',
                firstName: 'Amira',
                lastName: 'Hassan',
                role: _models_user_model__WEBPACK_IMPORTED_MODULE_1__["UserRole"].PEER_COUNSELOR,
                campus: _models_user_model__WEBPACK_IMPORTED_MODULE_1__["Campus"].KITENGELA,
                avatarUrl: 'assets/images/avatars/counselor-3.jpg',
                studentId: 'PS/2021/078',
                isActive: true,
                createdAt: new Date('2023-01-20'),
                trainingStatus: _models_user_model__WEBPACK_IMPORTED_MODULE_1__["TrainingStatus"].CERTIFIED,
                trainingCompletedAt: new Date('2023-09-10'),
                supportAreas: [
                    _models_user_model__WEBPACK_IMPORTED_MODULE_1__["SupportArea"].FINANCIAL_CHALLENGES,
                    _models_user_model__WEBPACK_IMPORTED_MODULE_1__["SupportArea"].CAREER_GUIDANCE,
                    _models_user_model__WEBPACK_IMPORTED_MODULE_1__["SupportArea"].MOTIVATION
                ],
                availability: [
                    { dayOfWeek: 1, startTime: '09:00', endTime: '12:00', isVirtual: false, location: 'Kitengela Campus Library' },
                    { dayOfWeek: 3, startTime: '14:00', endTime: '17:00', isVirtual: true },
                    { dayOfWeek: 6, startTime: '10:00', endTime: '13:00', isVirtual: true }
                ],
                virtualSupportAvailable: true,
                supervisorId: 'gs-003',
                bio: 'Psychology student with background in career counseling. Helps students navigate financial stress and career planning.',
                languages: ['English', 'Swahili', 'Somali'],
                rating: 4.9,
                totalSessions: 156
            },
            {
                id: 'pc-004',
                email: 'peter.kiprop@kca.ac.ke',
                firstName: 'Peter',
                lastName: 'Kiprop',
                role: _models_user_model__WEBPACK_IMPORTED_MODULE_1__["UserRole"].PEER_COUNSELOR,
                campus: _models_user_model__WEBPACK_IMPORTED_MODULE_1__["Campus"].RUARAKA,
                avatarUrl: 'assets/images/avatars/counselor-4.jpg',
                studentId: 'IT/2020/033',
                isActive: true,
                createdAt: new Date('2022-11-05'),
                trainingStatus: _models_user_model__WEBPACK_IMPORTED_MODULE_1__["TrainingStatus"].CERTIFIED,
                trainingCompletedAt: new Date('2023-05-20'),
                supportAreas: [
                    _models_user_model__WEBPACK_IMPORTED_MODULE_1__["SupportArea"].SLEEP_WELLBEING,
                    _models_user_model__WEBPACK_IMPORTED_MODULE_1__["SupportArea"].GENERAL_WELLBEING,
                    _models_user_model__WEBPACK_IMPORTED_MODULE_1__["SupportArea"].STRESS_MANAGEMENT
                ],
                availability: [
                    { dayOfWeek: 2, startTime: '18:00', endTime: '21:00', isVirtual: true },
                    { dayOfWeek: 4, startTime: '18:00', endTime: '21:00', isVirtual: true },
                    { dayOfWeek: 6, startTime: '09:00', endTime: '12:00', isVirtual: false, location: 'Wellness Center' }
                ],
                virtualSupportAvailable: true,
                supervisorId: 'gs-001',
                bio: 'IT student and wellness advocate. Focuses on sleep hygiene, general wellbeing, and stress reduction techniques.',
                languages: ['English', 'Swahili', 'Kalenjin'],
                rating: 4.7,
                totalSessions: 112
            },
            {
                id: 'pc-005',
                email: 'grace.wambui@kca.ac.ke',
                firstName: 'Grace',
                lastName: 'Wambui',
                role: _models_user_model__WEBPACK_IMPORTED_MODULE_1__["UserRole"].PEER_COUNSELOR,
                campus: _models_user_model__WEBPACK_IMPORTED_MODULE_1__["Campus"].TOWN,
                avatarUrl: 'assets/images/avatars/counselor-5.jpg',
                studentId: 'LW/2021/056',
                isActive: true,
                createdAt: new Date('2023-03-12'),
                trainingStatus: _models_user_model__WEBPACK_IMPORTED_MODULE_1__["TrainingStatus"].CERTIFIED,
                trainingCompletedAt: new Date('2023-10-05'),
                supportAreas: [
                    _models_user_model__WEBPACK_IMPORTED_MODULE_1__["SupportArea"].FAMILY_ISSUES,
                    _models_user_model__WEBPACK_IMPORTED_MODULE_1__["SupportArea"].ANXIETY_WORRY,
                    _models_user_model__WEBPACK_IMPORTED_MODULE_1__["SupportArea"].GENERAL_WELLBEING
                ],
                availability: [
                    { dayOfWeek: 1, startTime: '11:00', endTime: '14:00', isVirtual: false, location: 'Town Campus Room 105' },
                    { dayOfWeek: 3, startTime: '11:00', endTime: '14:00', isVirtual: true },
                    { dayOfWeek: 5, startTime: '10:00', endTime: '13:00', isVirtual: true }
                ],
                virtualSupportAvailable: true,
                supervisorId: 'gs-002',
                bio: 'Law student dedicated to supporting peers through family challenges and anxiety. Trained in trauma-informed peer support.',
                languages: ['English', 'Swahili', 'Kamba'],
                rating: 4.5,
                totalSessions: 89
            },
            {
                id: 'pc-006',
                email: 'samuel.kimani@kca.ac.ke',
                firstName: 'Samuel',
                lastName: 'Kimani',
                role: _models_user_model__WEBPACK_IMPORTED_MODULE_1__["UserRole"].PEER_COUNSELOR,
                campus: _models_user_model__WEBPACK_IMPORTED_MODULE_1__["Campus"].KITENGELA,
                avatarUrl: 'assets/images/avatars/counselor-6.jpg',
                studentId: 'EN/2020/089',
                isActive: true,
                createdAt: new Date('2022-10-18'),
                trainingStatus: _models_user_model__WEBPACK_IMPORTED_MODULE_1__["TrainingStatus"].CERTIFIED,
                trainingCompletedAt: new Date('2023-04-30'),
                supportAreas: [
                    _models_user_model__WEBPACK_IMPORTED_MODULE_1__["SupportArea"].ACADEMIC_PRESSURE,
                    _models_user_model__WEBPACK_IMPORTED_MODULE_1__["SupportArea"].CAREER_GUIDANCE,
                    _models_user_model__WEBPACK_IMPORTED_MODULE_1__["SupportArea"].MOTIVATION
                ],
                availability: [
                    { dayOfWeek: 2, startTime: '13:00', endTime: '16:00', isVirtual: false, location: 'Kitengela Campus Student Hub' },
                    { dayOfWeek: 4, startTime: '13:00', endTime: '16:00', isVirtual: true },
                    { dayOfWeek: 5, startTime: '14:00', endTime: '17:00', isVirtual: true }
                ],
                virtualSupportAvailable: true,
                supervisorId: 'gs-003',
                bio: 'Engineering student helping peers balance academic demands with career planning. Strong focus on motivation and goal-setting.',
                languages: ['English', 'Swahili', 'Kikuyu'],
                rating: 4.8,
                totalSessions: 134
            }
        ];
        this.supportRequests = [
            {
                id: 'sr-001',
                studentId: 'STU-2024-001',
                studentName: 'Alice Njeri',
                studentProgram: 'Computer Science',
                studentYear: 2,
                studentAvatar: 'assets/images/avatars/student-1.jpg',
                counselorId: 'pc-001',
                status: 'pending',
                category: 'Academic Pressure',
                urgency: 'High',
                message: 'I am overwhelmed with my coursework and upcoming exams. I feel like I cannot keep up with the workload and it is affecting my sleep and mental health.',
                createdAt: new Date('2024-03-20T10:30:00'),
                updatedAt: new Date('2024-03-20T10:30:00')
            },
            {
                id: 'sr-002',
                studentId: 'STU-2024-002',
                studentName: 'Brian Otieno',
                studentProgram: 'Business Administration',
                studentYear: 3,
                studentAvatar: 'assets/images/avatars/student-2.jpg',
                counselorId: 'pc-001',
                status: 'accepted',
                category: 'Stress Management',
                urgency: 'Medium',
                message: 'I have been feeling very stressed lately due to balancing my part-time job and studies. I need help with time management and stress relief techniques.',
                createdAt: new Date('2024-03-19T14:15:00'),
                updatedAt: new Date('2024-03-19T15:00:00')
            },
            {
                id: 'sr-003',
                studentId: 'STU-2024-003',
                studentName: 'Catherine Muthoni',
                studentProgram: 'Psychology',
                studentYear: 1,
                studentAvatar: 'assets/images/avatars/student-3.jpg',
                counselorId: 'pc-001',
                status: 'completed',
                category: 'Anxiety/Worry',
                urgency: 'Medium',
                message: 'I experience anxiety before presentations and group work. It is affecting my participation in class.',
                createdAt: new Date('2024-03-15T09:00:00'),
                updatedAt: new Date('2024-03-18T16:30:00')
            },
            {
                id: 'sr-004',
                studentId: 'STU-2024-004',
                studentName: 'David Kimani',
                studentProgram: 'Engineering',
                studentYear: 4,
                studentAvatar: 'assets/images/avatars/student-4.jpg',
                counselorId: 'pc-001',
                status: 'escalated',
                category: 'Family Issues',
                urgency: 'High',
                message: 'I am dealing with a family crisis at home and it is severely impacting my ability to focus on my final year project.',
                createdAt: new Date('2024-03-18T11:45:00'),
                updatedAt: new Date('2024-03-19T08:00:00')
            },
            {
                id: 'sr-005',
                studentId: 'STU-2024-005',
                studentName: 'Esther Wanjiku',
                studentProgram: 'Law',
                studentYear: 2,
                studentAvatar: 'assets/images/avatars/student-5.jpg',
                counselorId: 'pc-001',
                status: 'pending',
                category: 'Financial Challenges',
                urgency: 'Medium',
                message: 'I am struggling to pay my tuition fees and it is causing me a lot of anxiety. I need guidance on available financial aid options.',
                createdAt: new Date('2024-03-20T16:20:00'),
                updatedAt: new Date('2024-03-20T16:20:00')
            },
            {
                id: 'sr-006',
                studentId: 'STU-2024-006',
                studentName: 'Felix Ochieng',
                studentProgram: 'IT',
                studentYear: 3,
                studentAvatar: 'assets/images/avatars/student-6.jpg',
                counselorId: 'pc-001',
                status: 'accepted',
                category: 'Relationship',
                urgency: 'Low',
                message: 'I am having difficulties with my roommate and it is affecting my living situation and studies.',
                createdAt: new Date('2024-03-19T12:00:00'),
                updatedAt: new Date('2024-03-19T13:30:00')
            }
        ];
        this.requiredModules = [
            {
                id: 'tm-001',
                title: 'Peer Counseling Fundamentals',
                description: 'Core principles of peer counseling, active listening, and supportive communication',
                icon: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle>',
                iconColor: 'primary-100',
                required: true,
                difficulty: 'beginner',
                duration: 3,
                lessons: 8,
                progress: 100,
                category: 'Core Skills'
            },
            {
                id: 'tm-002',
                title: 'Crisis Intervention & Safety',
                description: 'Recognizing and responding to crisis situations, suicide prevention, and safety planning',
                icon: '<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line>',
                iconColor: 'error-light',
                required: true,
                difficulty: 'intermediate',
                duration: 4,
                lessons: 10,
                progress: 100,
                category: 'Safety'
            },
            {
                id: 'tm-003',
                title: 'Confidentiality & Ethics',
                description: 'Understanding confidentiality boundaries, mandatory reporting, and ethical guidelines',
                icon: '<path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path><path d="M12 6v6l4 2"></path>',
                iconColor: 'secondary-100',
                required: true,
                difficulty: 'beginner',
                duration: 2,
                lessons: 6,
                progress: 100,
                category: 'Ethics'
            },
            {
                id: 'tm-004',
                title: 'Mental Health Awareness',
                description: 'Common mental health conditions, stigma reduction, and referral pathways',
                icon: '<path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path><path d="M12 6v6l4 2"></path>',
                iconColor: 'accent-100',
                required: true,
                difficulty: 'beginner',
                duration: 3,
                lessons: 8,
                progress: 80,
                category: 'Knowledge'
            },
            {
                id: 'tm-005',
                title: 'Academic Support Strategies',
                description: 'Helping peers with study skills, time management, and academic stress',
                icon: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>',
                iconColor: 'secondary-100',
                required: true,
                difficulty: 'intermediate',
                duration: 3,
                lessons: 7,
                progress: 40,
                category: 'Core Skills'
            },
            {
                id: 'tm-006',
                title: 'Cultural Competency',
                description: 'Working effectively with diverse student populations and understanding cultural factors',
                icon: '<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line>',
                iconColor: 'primary-100',
                required: true,
                difficulty: 'intermediate',
                duration: 2,
                lessons: 5,
                progress: 0,
                category: 'Knowledge'
            }
        ];
        this.electiveModules = [
            {
                id: 'em-001',
                title: 'Substance Abuse Awareness',
                description: 'Understanding substance use disorders, harm reduction, and referral resources',
                icon: '<path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path><path d="M12 6v6l4 2"></path>',
                iconColor: 'warning-light',
                required: false,
                difficulty: 'intermediate',
                duration: 3,
                lessons: 8,
                progress: 0,
                category: 'Specialized'
            },
            {
                id: 'em-002',
                title: 'LGBTQ+ Inclusive Support',
                description: 'Providing affirming support for LGBTQ+ students and understanding unique challenges',
                icon: '<path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path><path d="M12 6v6l4 2"></path>',
                iconColor: 'accent-100',
                required: false,
                difficulty: 'intermediate',
                duration: 2,
                lessons: 6,
                progress: 0,
                category: 'Inclusion'
            },
            {
                id: 'em-003',
                title: 'Trauma-Informed Care',
                description: 'Understanding trauma responses and providing trauma-sensitive peer support',
                icon: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle>',
                iconColor: 'secondary-100',
                required: false,
                difficulty: 'advanced',
                duration: 4,
                lessons: 10,
                progress: 0,
                category: 'Specialized'
            },
            {
                id: 'em-004',
                title: 'Group Facilitation Skills',
                description: 'Leading support groups, workshops, and peer-led sessions effectively',
                icon: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle>',
                iconColor: 'primary-100',
                required: false,
                difficulty: 'intermediate',
                duration: 3,
                lessons: 7,
                progress: 25,
                category: 'Core Skills'
            },
            {
                id: 'em-005',
                title: 'Digital Peer Support',
                description: 'Best practices for providing peer support through digital platforms and chat',
                icon: '<path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path><path d="M12 6v6l4 2"></path>',
                iconColor: 'secondary-100',
                required: false,
                difficulty: 'beginner',
                duration: 2,
                lessons: 5,
                progress: 0,
                category: 'Technology'
            }
        ];
        this.certificates = [
            {
                certificateId: 'CERT-PC-2024-001',
                title: 'Certified Peer Counselor - Level 1',
                description: 'Completed all required foundational training modules for peer counseling',
                issuedDate: new Date('2023-08-20'),
                expiryDate: new Date('2025-08-20'),
                category: 'Core Certification'
            },
            {
                certificateId: 'CERT-PC-2024-002',
                title: 'Crisis Intervention Specialist',
                description: 'Advanced training in crisis intervention and safety planning',
                issuedDate: new Date('2023-09-15'),
                expiryDate: new Date('2025-09-15'),
                category: 'Specialization'
            },
            {
                certificateId: 'CERT-PC-2024-003',
                title: 'Mental Health First Aid',
                description: 'Certified in Mental Health First Aid for higher education settings',
                issuedDate: new Date('2023-10-10'),
                expiryDate: new Date('2026-10-10'),
                category: 'External Certification'
            }
        ];
    }
    getCounselors() {
        return [...this.counselors].filter(c => c.isActive).sort((a, b) => b.rating - a.rating);
    }
    getCounselorById(id) {
        return this.counselors.find(c => c.id === id);
    }
    getCounselorsByCampus(campus) {
        return this.counselors.filter(c => c.campus === campus && c.isActive);
    }
    getCounselorsBySupportArea(area) {
        return this.counselors.filter(c => c.supportAreas.includes(area) && c.isActive);
    }
    getAvailableCounselors() {
        return this.counselors.filter(c => c.isActive && c.availability.length > 0);
    }
    getCounselorsByLanguage(language) {
        return this.counselors.filter(c => c.languages.includes(language) && c.isActive);
    }
    getSupportRequests() {
        return [...this.supportRequests].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    }
    getSupportRequestById(id) {
        return this.supportRequests.find(r => r.id === id);
    }
    getSupportRequestsByCounselor(counselorId) {
        return this.supportRequests.filter(r => r.counselorId === counselorId);
    }
    acceptRequest(requestId) {
        const request = this.supportRequests.find(r => r.id === requestId);
        if (request) {
            request.status = 'accepted';
            request.updatedAt = new Date();
        }
    }
    escalateRequest(requestId) {
        const request = this.supportRequests.find(r => r.id === requestId);
        if (request) {
            request.status = 'escalated';
            request.updatedAt = new Date();
        }
    }
    completeRequest(requestId) {
        const request = this.supportRequests.find(r => r.id === requestId);
        if (request) {
            request.status = 'completed';
            request.updatedAt = new Date();
        }
    }
    getRequiredTrainingModules() {
        return [...this.requiredModules];
    }
    getElectiveTrainingModules() {
        return [...this.electiveModules];
    }
    getAllTrainingModules() {
        return [...this.requiredModules, ...this.electiveModules];
    }
    getCertificates() {
        return [...this.certificates];
    }
    getTrainingProgress(counselorId) {
        const allModules = this.getAllTrainingModules();
        const completed = allModules.filter(m => m.progress === 100).length;
        return {
            completed,
            total: allModules.length,
            percentage: Math.round((completed / allModules.length) * 100)
        };
    }
}
PeerCounselorService.ɵfac = function PeerCounselorService_Factory(t) { return new (t || PeerCounselorService)(); };
PeerCounselorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PeerCounselorService, factory: PeerCounselorService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PeerCounselorService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ })

}]);
//# sourceMappingURL=default~peer-counselor-peer-counselor-module~student-student-module.js.map