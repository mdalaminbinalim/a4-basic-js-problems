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
    const separated = email.split('@');
    const username = separated[0];
    const domainName = separated[1];
    return username + " " + "sent you an email from" + " " + domainName;
}




