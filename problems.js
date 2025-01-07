function calculateTax(income, expenses) {
    const profit = income - expenses;
    if ((income >= 0 && income >= expenses) && (expenses >= 0)) {
        const tax = profit * 0.2;
        return tax;
    }
    else {
        return "Invalid Input";
    }
}


function sendNotification(email) {
    if (email.indexOf('@') !== -1) {
        const separated = email.split('@');
        const username = separated[0];
        const domainName = separated[1];
        return username + " " + "sent you an email from" + " " + domainName;
    }
    else {
        return "Invalid Input";
    }
}


function checkDigitsInName(name) {
    if (typeof name === 'string') {
        for (i = 0; i < name.length; i++) {
            characters = name[i]
        }
        if (!isNaN(characters)) {
            let containsNumber = true;
            return containsNumber;
        }
        else {
            return false;
        }
    }
    else {
        return "Invalid Input"
    }
}


function calculateFinalScore(obj) {
    if (typeof obj === 'object' && typeof obj.name === 'string' && typeof obj.testScore === 'number' && typeof obj.schoolGrade === 'number' && typeof obj.isFFamily === 'boolean') {
        if (obj.testScore <= 50 && obj.schoolGrade <= 30 && obj.isFFamily === true) {
            const score = obj.testScore;
            const grade = obj.schoolGrade;
            const profession = 20;

            const totalScore = score + grade + profession;
            if (totalScore >= 80) {
                return true;
            }
            else {
                return false;
            }
        }
        else if (obj.testScore <= 50 && obj.schoolGrade <= 30 && obj.isFFamily === false) {
            const score = obj.testScore;
            const grade = obj.schoolGrade;
            const profession = 0;

            const totalScore = score + grade + profession;
            if (totalScore >= 80) {
                return true;
            }
            else {
                return false;
            }
        }
        else {
            return false;
        }
    }
    else {
        return "Invalid Input";
    }
}


function waitingTime(waitingTimes, serialNumber) {
    if (Array.isArray(waitingTimes) === true && typeof serialNumber === 'number' && serialNumber > waitingTime.length) {

    }
}
