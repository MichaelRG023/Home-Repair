import { useState } from "react";


function Contact(){
    const [email,setEmail] = useState('')





    return(
        <div>
            <h1>
               Send us a message 
            </h1>
                <p>Email us using our simple form and we'll respond within 10 working days</p>
                <form>
                <input value={email} onChange={e => setEmail(e.target.value)} type="email"></input>
                </form>
            <button>Submit</button>
            
            <h1>Make a Complaint</h1>
            <p>If you're not happy with the service you've received from Our Company, call us or send us an email and let us know.</p>
            <form>
            <input type="text" id="text" name="text" ></input>
            </form>
            <button>Send Complaint </button>
        </div>
    )
}

export default Contact;