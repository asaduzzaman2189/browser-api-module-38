const getCookie = (name) => {
  const cookie = document.cookie;
  const allCookie = cookie.split('; '); // ; দিয়ে ভাগ করা আছে তাই
  const findCookie = allCookie.find((c) => c.includes(name));
  if (findCookie) {
    // 'country=US' // এখানে country হচ্ছে নাম আর US হচ্ছে value.
    const cookieNameValue = findCookie.split('= ');
    return cookieNameValue[1];
  }
};

//cookie set korar jonno cookie library paowa jay...
