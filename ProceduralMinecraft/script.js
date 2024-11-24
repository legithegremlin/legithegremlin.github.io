window.onload = function() {
        // Loop through all span elements and set their color based on the red, green, or gray attribute
        const versions = document.querySelectorAll('span');
        
        versions.forEach(function(version) {
          if (version.hasAttribute('red')) {
            version.style.color = 'red';
          } else if (version.hasAttribute('green')) {
            version.style.color = 'green';
          } else if (version.hasAttribute('gray')) {
            version.style.color = 'gray';
          }
        });
};
