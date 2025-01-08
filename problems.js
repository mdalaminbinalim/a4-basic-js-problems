// -----Problem No. 1-----
// Calculate amount of tax (20%) from profit using income and expenses of a person.

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


// -----Problem No. 2-----
// Return a notification using the given E-mail address.

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


// -----Problem No. 3-----
// Check whether there is numbers in a name or not.

function checkDigitsInName(name) {

    if (typeof name === 'string') {
        for (i = 0; i < name.length; i++) {
            characters = name[i];

            if (!isNaN(characters)) {
                let containsNumber = true;
                return containsNumber;
            }
        }
        return false;
    }
    else {
        return "Invalid Input"
    }
}


// -----Problem No. 4-----
// Check the probability of getting job by calculating the total score of a student.

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


// -----Problem No. 5-----
// Calculate the potential waiting time of a candidate using the average interview time of the previous ones.

function waitingTime(waitingTimes, serialNumber) {

    if (Array.isArray(waitingTimes) === true && typeof serialNumber === 'number' && serialNumber > waitingTimes.length) {

        const candidatesAhead = serialNumber - 1;
        const candidatesRemaining = candidatesAhead - waitingTimes.length;

        let totalTime = 0;
        for (let time of waitingTimes) {
            totalTime = totalTime + time;
        }

        const averageTime = Math.round(totalTime / waitingTimes.length);
        const timeNeeded = Math.round(averageTime * candidatesRemaining);

        return timeNeeded;
    }
    else {
        return "Invalid Input";
    }
}