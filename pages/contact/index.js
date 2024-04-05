import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
import { BsArrowRight } from 'react-icons/bs';
import CustomAlert from '../../components/CustomAlert';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [alertMessage, setAlertMessage] = useState(''); 
  const [alertVisible, setAlertVisible] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // EmailJS service parameters
    const serviceParams = {
      Name: name,
      Email: email,
      Subject: subject,
      Message: message,
    };

    // Send email using EmailJS
    emailjs.send('service_g04vyx7', 'template_r2zykwl', serviceParams, 'Rm_cqiPKc0lxHeX-b')
      .then((response) => {
        console.log('Email sent successfully:', response);
        setAlertMessage('Email sent successfully!');
        setAlertVisible(true); // Set alert visible after successful submission
        setTimeout(() => {
          setAlertVisible(false); // Hide alert after 3 seconds
        }, 4000);
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        setAlertMessage('Error sending email!');
      });

    // Reset form fields
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
  };

  return (
    <div className='h-full bg-primary/30'>
      <div className='container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full'>
        <div className='flex flex-col w-full max-w-[700px]'>

        <div className='flex justify-center'>
          {/* check the alert component state */}
          {alertVisible && (
            <CustomAlert message={alertMessage} onClose={() => setAlertMessage('')} />
          )}
        </div>

          <motion.h2
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className='h2 text-center mb-5 mt-5'>
            Lets <span className='text-accent'>connect.</span>
          </motion.h2>


          <motion.form
            onSubmit={handleSubmit}
            className='flex-1 flex flex-col gap-6 w-full mx-auto'
            variants={fadeIn('up', 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden">
            <div className='flex gap-x-6 w-full'>
              <input
                type='text'
                placeholder='Name'
                className='input'
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input
                type='email'
                placeholder='Email'
                className='input'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <input
              type='text'
              placeholder='Subject'
              className='input'
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
            />
            <textarea
              placeholder='Message'
              className='textarea'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
            <button
              type='submit'
              className='btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group'>
              <span className='group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500'>
                Lets talk
              </span>
              <BsArrowRight
                className='-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]'
              />
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
