(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~guidance-guidance-module~student-student-module"],{

/***/ "TSJh":
/*!*******************************************************************!*\
  !*** ./src/app/core/services/professional-counselling.service.ts ***!
  \*******************************************************************/
/*! exports provided: ProfessionalCounsellingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfessionalCounsellingService", function() { return ProfessionalCounsellingService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/user.model */ "PQuL");



class ProfessionalCounsellingService {
    constructor() {
        this.counsellors = [
            {
                id: 'gs-001',
                email: 'dr.sarah.mwangi@kca.ac.ke',
                firstName: 'Sarah',
                lastName: 'Mwangi',
                role: _models_user_model__WEBPACK_IMPORTED_MODULE_1__["UserRole"].GUIDANCE_STAFF,
                campus: _models_user_model__WEBPACK_IMPORTED_MODULE_1__["Campus"].RUARAKA,
                avatarUrl: 'assets/images/avatars/professional-1.jpg',
                staffId: 'GS/2015/001',
                isActive: true,
                createdAt: new Date('2015-01-15'),
                professionalTitle: 'Senior Clinical Psychologist',
                specialization: ['Anxiety & Depression', 'Academic Stress', 'Trauma & PTSD', 'Grief & Loss'],
                licenseNumber: 'KPS/2015/0452',
                campusName: 'Ruaraka',
                availability: [
                    { dayOfWeek: 1, startTime: '09:00', endTime: '13:00', isVirtual: true },
                    { dayOfWeek: 2, startTime: '14:00', endTime: '17:00', isVirtual: false, location: 'Ruaraka Wellness Center Room 1' },
                    { dayOfWeek: 4, startTime: '09:00', endTime: '12:00', isVirtual: true }
                ],
                virtualSupportAvailable: true,
                supervisedCounselors: ['pc-001', 'pc-004'],
                bookingUrl: 'https://calendly.com/dr-sarah-mwangi',
                sessionFee: 3500,
                yearsExperience: 12
            },
            {
                id: 'gs-002',
                email: 'prof.james.omondi@kca.ac.ke',
                firstName: 'James',
                lastName: 'Omondi',
                role: _models_user_model__WEBPACK_IMPORTED_MODULE_1__["UserRole"].GUIDANCE_STAFF,
                campus: _models_user_model__WEBPACK_IMPORTED_MODULE_1__["Campus"].TOWN,
                avatarUrl: 'assets/images/avatars/professional-2.jpg',
                staffId: 'GS/2010/003',
                isActive: true,
                createdAt: new Date('2010-09-01'),
                professionalTitle: 'Professor of Counselling Psychology',
                specialization: ['Academic Stress', 'Career Counselling', 'Family Therapy', 'Substance Abuse'],
                licenseNumber: 'KPS/2010/0123',
                campusName: 'Town',
                availability: [
                    { dayOfWeek: 2, startTime: '10:00', endTime: '14:00', isVirtual: true },
                    { dayOfWeek: 3, startTime: '14:00', endTime: '18:00', isVirtual: false, location: 'Town Campus Counselling Suite' }
                ],
                virtualSupportAvailable: true,
                supervisedCounselors: ['pc-002', 'pc-005'],
                bookingUrl: 'https://calendly.com/prof-james-omondi',
                sessionFee: 4000,
                yearsExperience: 20
            },
            {
                id: 'gs-003',
                email: 'dr.grace.wanjiku@kca.ac.ke',
                firstName: 'Grace',
                lastName: 'Wanjiku',
                role: _models_user_model__WEBPACK_IMPORTED_MODULE_1__["UserRole"].GUIDANCE_STAFF,
                campus: _models_user_model__WEBPACK_IMPORTED_MODULE_1__["Campus"].KITENGELA,
                avatarUrl: 'assets/images/avatars/professional-3.jpg',
                staffId: 'GS/2018/007',
                isActive: true,
                createdAt: new Date('2018-03-20'),
                professionalTitle: 'Clinical Psychologist',
                specialization: ['Relationship Issues', 'Eating Disorders', 'LGBTQ+ Support', 'Anxiety & Depression'],
                licenseNumber: 'KPS/2018/0789',
                campusName: 'Kitengela',
                availability: [
                    { dayOfWeek: 1, startTime: '13:00', endTime: '17:00', isVirtual: false, location: 'Kitengela Wellness Hub' },
                    { dayOfWeek: 3, startTime: '09:00', endTime: '13:00', isVirtual: true },
                    { dayOfWeek: 5, startTime: '10:00', endTime: '14:00', isVirtual: true }
                ],
                virtualSupportAvailable: true,
                supervisedCounselors: ['pc-003', 'pc-006'],
                bookingUrl: 'https://calendly.com/dr-grace-wanjiku',
                sessionFee: 3000,
                yearsExperience: 8
            },
            {
                id: 'gs-004',
                email: 'dr.peter.kamau@kca.ac.ke',
                firstName: 'Peter',
                lastName: 'Kamau',
                role: _models_user_model__WEBPACK_IMPORTED_MODULE_1__["UserRole"].GUIDANCE_STAFF,
                campus: _models_user_model__WEBPACK_IMPORTED_MODULE_1__["Campus"].RUARAKA,
                avatarUrl: 'assets/images/avatars/professional-4.jpg',
                staffId: 'GS/2012/012',
                isActive: true,
                createdAt: new Date('2012-07-10'),
                professionalTitle: 'Senior Counselling Psychologist',
                specialization: ['Trauma & PTSD', 'Grief & Loss', 'Substance Abuse', 'Family Therapy'],
                licenseNumber: 'KPS/2012/0345',
                campusName: 'Ruaraka',
                availability: [
                    { dayOfWeek: 2, startTime: '08:00', endTime: '12:00', isVirtual: true },
                    { dayOfWeek: 4, startTime: '13:00', endTime: '17:00', isVirtual: false, location: 'Ruaraka Wellness Center Room 2' },
                    { dayOfWeek: 6, startTime: '09:00', endTime: '13:00', isVirtual: true }
                ],
                virtualSupportAvailable: true,
                supervisedCounselors: [],
                bookingUrl: 'https://calendly.com/dr-peter-kamau',
                sessionFee: 3800,
                yearsExperience: 15
            },
            {
                id: 'gs-005',
                email: 'ms.amina.ahmed@kca.ac.ke',
                firstName: 'Amina',
                lastName: 'Ahmed',
                role: _models_user_model__WEBPACK_IMPORTED_MODULE_1__["UserRole"].GUIDANCE_STAFF,
                campus: _models_user_model__WEBPACK_IMPORTED_MODULE_1__["Campus"].TOWN,
                avatarUrl: 'assets/images/avatars/professional-5.jpg',
                staffId: 'GS/2019/021',
                isActive: true,
                createdAt: new Date('2019-11-05'),
                professionalTitle: 'Career Counsellor & Psychologist',
                specialization: ['Career Counselling', 'Academic Stress', 'Motivation', 'Life Transitions'],
                licenseNumber: 'KPS/2019/0567',
                campusName: 'Town',
                availability: [
                    { dayOfWeek: 1, startTime: '14:00', endTime: '18:00', isVirtual: true },
                    { dayOfWeek: 3, startTime: '10:00', endTime: '14:00', isVirtual: false, location: 'Town Campus Career Centre' },
                    { dayOfWeek: 5, startTime: '13:00', endTime: '17:00', isVirtual: true }
                ],
                virtualSupportAvailable: true,
                supervisedCounselors: [],
                bookingUrl: 'https://calendly.com/ms-amina-ahmed',
                sessionFee: 2800,
                yearsExperience: 6
            },
            {
                id: 'gs-006',
                email: 'dr.robert.ochieng@kca.ac.ke',
                firstName: 'Robert',
                lastName: 'Ochieng',
                role: _models_user_model__WEBPACK_IMPORTED_MODULE_1__["UserRole"].GUIDANCE_STAFF,
                campus: _models_user_model__WEBPACK_IMPORTED_MODULE_1__["Campus"].KITENGELA,
                avatarUrl: 'assets/images/avatars/professional-6.jpg',
                staffId: 'GS/2016/008',
                isActive: true,
                createdAt: new Date('2016-02-28'),
                professionalTitle: 'Clinical Psychologist',
                specialization: ['Anxiety & Depression', 'Relationship Issues', 'LGBTQ+ Support', 'Academic Stress'],
                licenseNumber: 'KPS/2016/0234',
                campusName: 'Kitengela',
                availability: [
                    { dayOfWeek: 2, startTime: '14:00', endTime: '18:00', isVirtual: false, location: 'Kitengela Wellness Hub Room 2' },
                    { dayOfWeek: 4, startTime: '09:00', endTime: '13:00', isVirtual: true }
                ],
                virtualSupportAvailable: true,
                supervisedCounselors: [],
                bookingUrl: 'https://calendly.com/dr-robert-ochieng',
                sessionFee: 3200,
                yearsExperience: 10
            }
        ];
        this.mockAppointments = [
            {
                id: 'appt-001',
                counsellorId: 'gs-001',
                counsellorName: 'Sarah Mwangi',
                counsellorTitle: 'Senior Clinical Psychologist',
                counsellorAvatar: 'assets/images/avatars/professional-1.jpg',
                date: new Date('2024-03-25'),
                time: '10:00',
                isVirtual: true,
                status: 'confirmed',
                notes: 'Follow-up on anxiety management'
            },
            {
                id: 'appt-002',
                counsellorId: 'gs-003',
                counsellorName: 'Grace Wanjiku',
                counsellorTitle: 'Clinical Psychologist',
                counsellorAvatar: 'assets/images/avatars/professional-3.jpg',
                date: new Date('2024-03-28'),
                time: '14:00',
                isVirtual: false,
                location: 'Kitengela Wellness Hub',
                status: 'confirmed',
                notes: 'Initial consultation'
            }
        ];
        this.escalations = [
            {
                id: 'esc-001',
                studentId: 'STU-2024-001',
                studentName: 'Alice Njeri',
                studentProgram: 'Computer Science',
                studentYear: 2,
                peerCounselorId: 'pc-001',
                peerCounselorName: 'Jane Mwangi',
                status: 'pending',
                urgency: 'High',
                reason: 'Student expresses suicidal ideation and requires immediate professional intervention',
                peerNotes: 'Student has been withdrawn for 2 weeks, mentioned "not wanting to be here anymore" during session',
                createdAt: new Date('2024-03-20T10:30:00'),
                updatedAt: new Date('2024-03-20T10:30:00')
            },
            {
                id: 'esc-002',
                studentId: 'STU-2024-002',
                studentName: 'Brian Otieno',
                studentProgram: 'Business Administration',
                studentYear: 3,
                peerCounselorId: 'pc-002',
                peerCounselorName: 'David Ochieng',
                status: 'assigned',
                urgency: 'Medium',
                reason: 'Severe anxiety affecting academic performance, requires specialized CBT',
                peerNotes: 'Student experiencing panic attacks before exams, recommended for professional counseling',
                createdAt: new Date('2024-03-19T14:15:00'),
                updatedAt: new Date('2024-03-19T15:00:00'),
                assignedCounsellorId: 'gs-001'
            },
            {
                id: 'esc-003',
                studentId: 'STU-2024-003',
                studentName: 'Catherine Muthoni',
                studentProgram: 'Psychology',
                studentYear: 1,
                peerCounselorId: 'pc-003',
                peerCounselorName: 'Amira Hassan',
                status: 'in_progress',
                urgency: 'Medium',
                reason: 'Family trauma requiring trauma-informed therapy',
                peerNotes: 'Student disclosed childhood trauma, needs specialist in trauma-informed care',
                createdAt: new Date('2024-03-18T09:00:00'),
                updatedAt: new Date('2024-03-19T16:30:00'),
                assignedCounsellorId: 'gs-003'
            },
            {
                id: 'esc-004',
                studentId: 'STU-2024-004',
                studentName: 'David Kimani',
                studentProgram: 'Engineering',
                studentYear: 4,
                peerCounselorId: 'pc-001',
                peerCounselorName: 'Jane Mwangi',
                status: 'resolved',
                urgency: 'High',
                reason: 'Substance abuse concern, referred to rehabilitation program',
                peerNotes: 'Student admitted to alcohol dependency, successfully referred to rehab program',
                createdAt: new Date('2024-03-15T11:45:00'),
                updatedAt: new Date('2024-03-18T08:00:00'),
                assignedCounsellorId: 'gs-002'
            }
        ];
        this.supervisedCounselors = [
            {
                id: 'pc-001',
                firstName: 'Jane',
                lastName: 'Mwangi',
                studentId: 'CS/2021/045',
                program: 'Computer Science',
                avatarUrl: 'assets/images/avatars/counselor-1.jpg',
                trainingStatus: 'certified',
                rating: 4.8,
                sessionsThisMonth: 12,
                lastSupervision: new Date('2024-03-15')
            },
            {
                id: 'pc-004',
                firstName: 'Peter',
                lastName: 'Kiprop',
                studentId: 'IT/2020/033',
                program: 'Information Technology',
                avatarUrl: 'assets/images/avatars/counselor-4.jpg',
                trainingStatus: 'certified',
                rating: 4.7,
                sessionsThisMonth: 8,
                lastSupervision: new Date('2024-03-10')
            }
        ];
        this.supervisionSessions = [
            {
                id: 'sup-001',
                counsellorId: 'gs-001',
                counselorId: 'pc-001',
                counselorName: 'Jane Mwangi',
                counselorAvatar: 'assets/images/avatars/counselor-1.jpg',
                date: new Date('2024-03-25'),
                time: '10:00',
                duration: 60,
                focusAreas: ['Case Review', 'Boundary Management'],
                notes: 'Review complex family trauma case',
                status: 'scheduled',
                createdAt: new Date('2024-03-20')
            },
            {
                id: 'sup-002',
                counsellorId: 'gs-001',
                counselorId: 'pc-004',
                counselorName: 'Peter Kiprop',
                counselorAvatar: 'assets/images/avatars/counselor-4.jpg',
                date: new Date('2024-03-28'),
                time: '14:00',
                duration: 45,
                focusAreas: ['Skill Development', 'Self-Care'],
                notes: 'Discuss burnout prevention strategies',
                status: 'scheduled',
                createdAt: new Date('2024-03-21')
            },
            {
                id: 'sup-003',
                counsellorId: 'gs-001',
                counselorId: 'pc-001',
                counselorName: 'Jane Mwangi',
                counselorAvatar: 'assets/images/avatars/counselor-1.jpg',
                date: new Date('2024-03-15'),
                time: '10:00',
                duration: 60,
                focusAreas: ['Case Review', 'Ethics'],
                notes: 'Discussed dual relationship concerns',
                status: 'completed',
                createdAt: new Date('2024-03-10'),
                updatedAt: new Date('2024-03-15')
            }
        ];
        this.caseReviews = [
            {
                id: 'cr-001',
                studentId: 'STU-2024-001',
                studentName: 'Alice Njeri',
                studentProgram: 'Computer Science',
                peerCounselorId: 'pc-001',
                peerCounselorName: 'Jane Mwangi',
                status: 'pending',
                priority: 'High',
                category: 'Suicidal Ideation',
                summary: 'Student expressing passive suicidal ideation, peer counselor escalated appropriately',
                submittedAt: new Date('2024-03-20')
            },
            {
                id: 'cr-002',
                studentId: 'STU-2024-002',
                studentName: 'Brian Otieno',
                studentProgram: 'Business Administration',
                peerCounselorId: 'pc-002',
                peerCounselorName: 'David Ochieng',
                status: 'in_progress',
                priority: 'Medium',
                category: 'Severe Anxiety',
                summary: 'Panic attacks before exams, needs CBT referral',
                submittedAt: new Date('2024-03-19')
            },
            {
                id: 'cr-003',
                studentId: 'STU-2024-003',
                studentName: 'Catherine Muthoni',
                studentProgram: 'Psychology',
                peerCounselorId: 'pc-003',
                peerCounselorName: 'Amira Hassan',
                status: 'completed',
                priority: 'Medium',
                category: 'Family Trauma',
                summary: 'Childhood trauma disclosure, referred to trauma specialist',
                submittedAt: new Date('2024-03-18')
            }
        ];
    }
    getCounsellors() {
        return [...this.counsellors].filter(c => c.isActive).sort((a, b) => a.lastName.localeCompare(b.lastName));
    }
    getCounsellorById(id) {
        return this.counsellors.find(c => c.id === id);
    }
    getCounsellorsByCampus(campus) {
        return this.counsellors.filter(c => c.campus === campus && c.isActive);
    }
    getCounsellorsBySpecialization(specialization) {
        return this.counsellors.filter(c => c.specialization.includes(specialization) && c.isActive);
    }
    getAvailableCounsellors() {
        return this.counsellors.filter(c => c.isActive && c.availability.length > 0);
    }
    getUpcomingAppointments() {
        const now = new Date();
        return [...this.mockAppointments]
            .filter(a => new Date(a.date) >= now && a.status !== 'cancelled')
            .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
    }
    getPastAppointments() {
        const now = new Date();
        return [...this.mockAppointments]
            .filter(a => new Date(a.date) < now || a.status === 'cancelled' || a.status === 'completed')
            .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    }
    getAllAppointments() {
        return [...this.mockAppointments].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
    }
    getAppointmentById(id) {
        return this.mockAppointments.find(a => a.id === id);
    }
    bookAppointment(appointment) {
        return new Promise((resolve) => {
            const newAppointment = Object.assign(Object.assign({}, appointment), { id: 'appt-' + Date.now(), status: 'pending' });
            this.mockAppointments.push(newAppointment);
            setTimeout(() => resolve(newAppointment), 500);
        });
    }
    cancelAppointment(id) {
        return new Promise((resolve) => {
            const index = this.mockAppointments.findIndex(a => a.id === id);
            if (index !== -1) {
                this.mockAppointments[index].status = 'cancelled';
                setTimeout(() => resolve(true), 300);
            }
            else {
                setTimeout(() => resolve(false), 300);
            }
        });
    }
    rescheduleAppointment(id, newDate, newTime) {
        return new Promise((resolve) => {
            const index = this.mockAppointments.findIndex(a => a.id === id);
            if (index !== -1) {
                this.mockAppointments[index].date = newDate;
                this.mockAppointments[index].time = newTime;
                this.mockAppointments[index].status = 'pending';
                setTimeout(() => resolve(this.mockAppointments[index]), 300);
            }
            else {
                setTimeout(() => resolve(null), 300);
            }
        });
    }
    getEscalations() {
        return [...this.escalations].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    }
    getEscalationById(id) {
        return this.escalations.find(e => e.id === id);
    }
    getEscalationsByCounsellor(counsellorId) {
        return this.escalations.filter(e => e.assignedCounsellorId === counsellorId);
    }
    assignEscalation(escalationId, counsellorId) {
        const escalation = this.escalations.find(e => e.id === escalationId);
        if (escalation) {
            escalation.status = 'assigned';
            escalation.assignedCounsellorId = counsellorId;
            escalation.updatedAt = new Date();
        }
    }
    resolveEscalation(escalationId) {
        const escalation = this.escalations.find(e => e.id === escalationId);
        if (escalation) {
            escalation.status = 'resolved';
            escalation.updatedAt = new Date();
        }
    }
    getSupervisedCounselors(counsellorId) {
        return [...this.supervisedCounselors].filter(c => this.counsellors.find(cs => { var _a; return ((_a = cs.supervisedCounselors) === null || _a === void 0 ? void 0 : _a.includes(c.id)) && cs.id === counsellorId; }));
    }
    getSupervisionSessions(counsellorId) {
        return [...this.supervisionSessions]
            .filter(s => s.counsellorId === counsellorId)
            .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
    }
    getCaseReviews(counsellorId) {
        return [...this.caseReviews].sort((a, b) => new Date(b.submittedAt).getTime() - new Date(a.submittedAt).getTime());
    }
    createSupervisionSession(session) {
        this.supervisionSessions.push(session);
    }
    updateSupervisionSession(sessionId, updates) {
        const index = this.supervisionSessions.findIndex(s => s.id === sessionId);
        if (index !== -1) {
            this.supervisionSessions[index] = Object.assign(Object.assign(Object.assign({}, this.supervisionSessions[index]), updates), { updatedAt: new Date() });
        }
    }
}
ProfessionalCounsellingService.ɵfac = function ProfessionalCounsellingService_Factory(t) { return new (t || ProfessionalCounsellingService)(); };
ProfessionalCounsellingService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ProfessionalCounsellingService, factory: ProfessionalCounsellingService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfessionalCounsellingService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ })

}]);
//# sourceMappingURL=default~guidance-guidance-module~student-student-module.js.map