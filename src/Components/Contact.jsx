/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';
import { useRef } from 'react';

export const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    // eslint-disable-next-line no-undef
    mailjs.sendForm('service_r492x9y', 'template_0hyjkoh', form.current, 'Vvxm4j7H6WwcBvOhY')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
      e.target.reset()
  };
  const center = {
    justifyContent: "center",
    alignItem: "center",
    display: "flex",
    flexDirection: "row",
    // padding:"15px ",

  }
  const formed = {
    width: "50%",
    // marginLeft:"600px",
    padding: "10px",

  }
  const inputs = {
    padding: "5px",
    marginLeft: "100px",
    fontSize: "20px",
    fontWeight: "bold"
  }
  const maps = {
    boxSizing: "border-box"
  }
  const display = {
    display: "flex",
  }
  const input = {
    justifyContent: "center",
    display: "flex",
    padding: "4px",
    marginLeft: "100px",
  }
  return (
    <div>
      <hr></hr>
      <div style={center}>
        <h3><span>Contact</span>Me</h3>
      </div>

      <div>
        <div style={display}>
          <div>
            <form style={formed} ref={form} onSubmit={sendEmail}>
              <div style={inputs}>
                <label for="name"></label>
                <input type="text" placeholder="Your  Name" tabindex="1" name="user_name" required />
              </div>

              <div style={inputs}>
                <label for="Email"></label>
                <input type="Email" placeholder="Your Email" tabindex="2" name="user_email" required />
              </div>

              <div style={inputs}>
                <label for="Subject"></label>
                <input type="number" placeholder="phone number" tabindex="3"  name="subject" required />
              </div>

              <div style={inputs}>
                <label for="Message"></label>
                <textarea name="Message" cols="60" rows="6"
                  placeholder="Message"></textarea>
              </div>

              <button style={input} type="submit">Send Message</button>
            </form>
          </div>

          <div style={maps}>

            <iframe width="770" height="510" src="https://maps.google.com/maps?q=pondy&t=&z=10&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
            {/* <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1490.324450684539!2d79.84076294237633!3d11.987322622579052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTHCsDU5JzEzLjMiTiA3OcKwNTAnMjQuOSJF!5e0!3m2!1sen!2sin!4v1680717013351!5m2!1sen!2sin"></iframe> */}
          </div>
        </div>
      </div>
    </div>
  )
}
