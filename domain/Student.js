class Student {
    constructor({ id, name, responsibleEmail, siblings = 0, scholarship = null }) {
    this.id = id;
    this.name = name;
    this.responsibleEmail = responsibleEmail;
    this.siblings = siblings; // número de irmãos matriculados
    this.scholarship = scholarship; // { type: 'partial'|'full', percent:50 }
    }
}
module.exports = Student;
