doctype html
html
  include header
  
  body(ng-app='bookitinApp', class='stretched', md-theme='vrTheme')
    // Main navigation menu
    include navigation

    // The main content which will be exetended in each file
    block main-content
    
    // Footer content
    include footer

    // All the required script files
    include scripts
    
    // Any additional script file will be added here from the calling file
    block additional-scripts
