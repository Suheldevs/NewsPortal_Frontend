// const FormatDate = (dateString) => {
//   const date = new Date(dateString);
//   return date.toLocaleDateString('en-IN', {
//     year: 'numeric',
//     month: 'long',
//     day: 'numeric',
//     hour: '2-digit',
//     minute: '2-digit'
//   });
// };

// export default FormatDate



const FormatDate = (dateString) => {
  const date = new Date(dateString);
  const now = new Date();
  const diff = Math.floor((now - date) / 1000); 

  if (diff < 60) {
    return 'just now';
  } else if (diff < 3600) {
    const mins = Math.floor(diff / 60);
    return `${mins} minute${mins > 1 ? 's' : ''} ago`;
  } else if (diff < 86400) {
    const hours = Math.floor(diff / 3600);
    return `${hours} hour${hours > 1 ? 's' : ''} ago`;
  } else if (diff < 2592000) {
    const days = Math.floor(diff / 86400);
    return `${days} day${days > 1 ? 's' : ''} ago`;
  } else {
    return date.toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  }
};

export default FormatDate;
