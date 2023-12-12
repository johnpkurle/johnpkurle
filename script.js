// script.js
document.addEventListener("DOMContentLoaded", function() {
    console.log("DOMContentLoaded event fired");


});

function changeContent(contentId) {
    console.log("Button clicked");

    // Update the content of the specified element
    document.getElementById(contentId).innerHTML = `
    <h3>About Me</h3>
                <p>Hi, I'm John. I'm currently a sophomore CS student at UW
                    Madison. My favorite thing about programming is being able
                    to develop unique and efficient software solutions by leveraging
                    interactions between
                    data structures. I value creativity and expression,
                    both inside and out of programming.
                </p>
                <p>
                    My programming journey started when I took a Scratch
                    class at age 7. I learned about basic programming statements
                    and conditions, as well as the concept of organizing code into methods
                    and classes. I belive this exposure to
                    computer science has translated to a deeper understanding
                    of concepts that I learn today.
                </p>
                <p>
                    At that point, I became interested in creating with code.
                    I participated in a Lego League club in elementary school and got experience
                    with programming physical results. I tinkered with wires and lightbulbs,
                    and even coded some of my own stages for the game Sumotori Dreams (2007).
                </p>
                <p>
                    In middle and highschool I did not do much programming, but I did assemble
                    a computer and learn about the different components and what they do. After
                    highschool I earned credits from a comminity college and worked.
                </p>
                <p>
                    Now, at Madison, I am seeing my preparation pay off. I have been acquiring
                    CS experience in areas such as JavaFX, hosting a webserver, and using git to integrate
                    separate frontend and backend. I am excited to put these skills to use and learn new things.
                </p>`
}

function changeContentSong(contentId) {
    console.log("Button clicked");

    // Update the content of the specified element
    document.getElementById(contentId).innerHTML = `
    <h3>Song Searcher</h3>
    <p>
        Song Searcher is a program I co-developed during CS400. It makes use of an iterable red-black-tree
        to sort songs in descending "Danceability" score. The rbt supports storing multiple songs
        with the same danceability value.
    </p>    
    <p>
        The user is able to load data into the rbt from a .csv file, and can then choose to calculate
        the average danceability of the whole tree, or get a list of each song with danceability at/above
        a user-defined threshold.
    </p>
    <p>
        Due to CS400 class policy, I am not allowed to share sourcecode from this project.
        Here is a video demonstrating:
    </p>`
}

function changeContentPath(contentId) {
    console.log("Button clicked");

    // Update the content of the specified element
    document.getElementById(contentId).innerHTML = `
    <h3>Campus Pathfinder</h3>
    <p>
        Campus Pathfinder is a program I co-developed during CS400. It makes use of a graph and Dijkstra's
        algorithm to navigate efficiently through a weighted network of nodes. 
    </p>    
    <p>
        The user is able to load data into the graph from a .dot file, and can then choose to show
        general stats about the graph (number of nodes, edges, and total edge weight), or to caculate
        the most efficient path between two nodes. It properly handles exceptions when the nodes are
        not connected. 
    </p>
    <p>
        Due to CS400 class policy, I am not allowed to share sourcecode from this project.
        Here is a video demonstrating:
    </p>`
}

function changeContentCNPE(contentId) {
    console.log("Button clicked");

    // Update the content of the specified element
    document.getElementById(contentId).innerHTML = `
    <h3>ESF CNPE Redesign</h3>
    <p>
        ESF CNPE is the Center for Native Peoples and the Environment at the SUNY College of
        Environmental Science and Forestry. Directed by Dr. Robin Kimmerer, CNPE creates programs
        that combine Indigenous and scientific knowledge in order to further the field of
        environmental sustainability.
    </p>    
    <p>
        I worked in a small team to redesign the client website. The project is built in AdobeXD
        and aims to improve UX by organizing information into content buckets, grouping links to like information
        within a dropdown menu, and moving large chunks of copy to their own pages.
    </p>
    <img src='images/cnperedesign.png'>
    `
}

function changeContentResume(contentId) {
    console.log("Button clicked");

    // Update the content of the specified element
    document.getElementById(contentId).innerHTML = `
    <embed src="documents/Kurle_Resume.pdf" width="100%" height=800px/>
    `
}

function changeContentWeb(contentId) {
    console.log("Button clicked");

    // Update the content of the specified element
    document.getElementById(contentId).innerHTML = `
    <h3>This Website!</h3>
    <p>
        This very website you are currently on is a project of mine. In it,
        I utilize design choices to create an intuitive and easy UX.
        In the top left is a simple logo, which is an easy way to let the
        user know they haven't left my page. In the top right are things
        I want to usher the user towards. The dropdown menus provide many
        options while keeping clutter to a minimum.
    </p>
    <p>
        The sidebar on the right provides a graphical display of my projects,
        and also contains extra information a user might find interesting. The
        footer provides links to an email submission form, and my LinkedIn page.
        As of 12/11/2023 I am having trouble getting the email submission to work.
    </p>
    <p>
        The main content area is what I am most proud of, as it is my first
        project that uses javascript. It's capable of
        changing the displayed content when certain elements are clicked. I use
        this to turn the space into a mini-display. It can show all my projects
        and resume as if they were separate pages, but it doesn't have to
        reload the entire webpage each time.
    </p>
    <p>
    `
}