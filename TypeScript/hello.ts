interface Person {
    firstName: string;
    middleInitial: string;
    lastName: string;
    fullName: string;
}            

function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName + "!" + " Your full name is " + person.fullName;
}

let user = { firstName: "John", middleInitial: "M.", lastName: "Doe", fullName: "John M. Doe" };

let greetingElement = document.getElementById("greeting");
if (greetingElement) {
    greetingElement.innerHTML = greeter(user);
} else {
    console.error("Element with ID 'greeting' not found.");
}