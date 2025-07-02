import React, { useEffect, useState } from 'react';

const Homepin = () => {
  const [accessGranted, setAccessGranted] = useState(false);

  useEffect(() => {
    const pin = prompt("Enter PIN to access the site:");
    if (pin === '9999') {
      setAccessGranted(true);
    } else {
      alert("Access Denied");
      window.location.href = "about:blank"; // or redirect to error page
    }
  }, []);

  if (!accessGranted) {
    return null; // or loading spinner
  }

  return (
   <>
   </>
  );
};<>
</>

export default Homepin;
