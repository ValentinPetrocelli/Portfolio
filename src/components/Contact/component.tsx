import ContactForm from "./_/ContactForm";

const Contact = () => {
    // Render
    return (
        <div id="contact" className="flex flex-col items-center w-full h-screen bg-neutral-800">
            <h2 className="text-green-500 p-8 text-[1.5rem] md:text-[2rem] font-semibold">Contact</h2>

            <ContactForm />
        </div>
    );
};

export default Contact;