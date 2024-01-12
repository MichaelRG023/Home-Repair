import { useState } from "react";



function Contact(){
    const [email,setEmail] = useState('')



 // h-12 height to 48px

    return(
        <div className="bg-amber-600">
            <h1 className="text-gray-900 text-xl">Send us a message</h1>
                <p className="text-gray-800 px-1 max-w-md">Email us using our simple form and we'll respond within 10 working days</p>
                <form className="">
                <input value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder="type out your email..."></input>
                </form>
                <button className="h-12 px-6 m-2 text-lg  transition-colors duration-150 bg-yellow-500 rounded-lg focus:shadow-outline hover:bg-yellow-400">Submit</button>
            
            <h1 className="text-gray-900 text-xl">Make a Complaint</h1>
            <p className="text-gray-800 py-3 max-w-md">If you're not happy with the service you've received from Our Company, call us or send us an email and let us know.</p>
            <form>
            <input type="text" id="text" name="text" placeholder="send a complaint..." ></input>
            </form>
            
            <button className="h-12 px-6 m-2 text-lg  transition-colors duration-150 bg-yellow-500 rounded-lg focus:shadow-outline hover:bg-yellow-400"> Complaint </button>
            
        </div>
    )
}

export default Contact;