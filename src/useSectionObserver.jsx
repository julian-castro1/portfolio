import { useEffect, useState } from 'react';

export const useSectionObserver = () => {
  const [selectedSection, setSelectedSection] = useState('Home');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // Set the selected section based on the section ID
            setSelectedSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: .1 // Adjust threshold value as needed
      }
    );

    // Sections to observe
    const sections = ['Home', 'Bio', 'Projects', 'Education', 'Contact-me'];
    sections.forEach(sectionId => {
      const section = document.getElementById(sectionId);
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach(sectionId => {
        const section = document.getElementById(sectionId);
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return selectedSection;
};
