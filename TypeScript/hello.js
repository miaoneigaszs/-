function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName + "!" + " Your full name is " + person.fullName;
}
var user = { firstName: "John", middleInitial: "M.", lastName: "Doe", fullName: "John M. Doe" };
var greetingElement = document.getElementById("greeting");
if (greetingElement) {
    greetingElement.innerHTML = greeter(user);
}
else {
    console.error("Element with ID 'greeting' not found.");
}
