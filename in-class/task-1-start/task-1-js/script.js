window.onload = setup;

/** function setup */
function setup() {
    console.log("we are a go!");
    /*** ALL ANWSERS TO BE ADDED IN THE ALLOCATED SPACE */
    /*** START PART ONE ACCESS */
    /* 1: all paragraph elements */
    /***CODE */
    let all_paragraph_elements = document.querySelectorAll("p");
    /***OUTPUT: 
     * 
     */
    console.log(all_paragraph_elements);

    /*************************************** */
    /* 2: only the first paragraph element */
    /***CODE */
    let first_paragraph_element = document.querySelector("p");
    /***OUTPUT: 
     * 
     */
    console.log(first_paragraph_element);

    /*************************************** */
    /* 3: all elements with the class inner-container */
    /***CODE */
    let all_class_inner = document.querySelectorAll(".inner-container");
    /***OUTPUT: 
     * 
     */
    console.log(all_class_inner);

    /*************************************** */
    /* 4: the last image element inside the element that has the class img-container */
    /***CODE */
    let all_img = document.querySelectorAll(".img-container");
    let final_image = all_img[all_img.length - 1].querySelector("img");
    /***OUTPUT: 
     * 
     */
    console.log(final_image);


    /*************************************** */
    /* 5A: all h2 elements */
    /* 5B: length of the list in 5A */
    /* 5C: the text content of the first element in the list from 5A */
    /***CODE */
    let all_h2 = document.querySelectorAll("h2");
    let text_length = all_h2.length;
    let h2_text = all_h2[0].innerHTML;
    /***OUTPUT: 
     * 
     */
    console.log(all_h2);
    console.log(text_length);
    console.log(h2_text);

    /*************************************** */
    /* 6: the element with id name parent */
    /***CODE */
    let id_parent = document.querySelector("#parent");
    /***OUTPUT: 
     * 
     */
    console.log(id_parent);

    /*************************************** */
    /*** END PART ONE ACCESS */


    /*************************************** */
    /*** START PART TWO MODIFY */
    /*************************************** */
    // /* 1: Select the first paragraph and replace the text within the paragraph... */
    // /***CODE */

    // all_paragraph_elements[0].innerHTML = 'New text in paragraph one: text changed by Jeremy on the following date: Jan 23rd 2025.';

    // /*************************************** */
    // /* 2: Select all elements in the HTML that have the class name content-container
    //  and change the background color ... of first and second ...*/
    // /***CODE */

    // let all_content_container = document.querySelectorAll(".content-container");
    // console.log(all_content_container);
    // all_content_container[0].style.backgroundColor = "orange";
    // all_content_container[1].style.backgroundColor = "purple";


    // /*************************************** */
    // /* 3: Change the src element of the first image element on the page to be ...
    // /***CODE */

    // let image_to_change = document.querySelector("img");
    // image_to_change.src = "task-1-images/seven.png";


    // /*************************************** */
    // /* 4: Select the third paragraph element on the page and 
    // replace the content (within the paragraph) to be an h2 element which contains the text `TEST 123`
    // /***CODE */

    // let third_paragraph = all_paragraph_elements[2];
    // let text_to_add = "<h2>TEST 123</h2>";
    // third_paragraph.innerHTML = text_to_add;

    // /*************************************** */
    // /* 5: Select the fourth paragraph element on the page and 
    // add to the existing content an h2 element containing the text `TEST 123`
    // /***CODE */

    // let fourth_paragraph = all_paragraph_elements[3];
    // fourth_paragraph.innerHTML += text_to_add;

    // /*************************************** */
    // /* 6: Select the fifth paragraph element on the page and add to the existing content 
    // an img element that holds `one.png`, and add the class newStyle to said paragraph element.
    // /***CODE */

    // let fifth_paragraph = all_paragraph_elements[4];
    // fifth_paragraph.innerHTML += `<img src="task-1-images/one.png">`;
    // fifth_paragraph.className = "newStyle";
    // console.log(fifth_paragraph);


    // /*************************************** */
    // /* 7: Add the following array variable: let colors = ['red','blue','green','orange'];, 
    // then access all elements with class name inner-container and save to a variable called `innerContainers`. 
    // Next, iterate over the colors array, and for each color: 
    // assign the element from innerContainers variable with the same index 
    // (i.e. colors[0] should be allocated to the first innerContainers element, colors[1] to the second, etc ...) 
    // a background using that color.
    // /***CODE */

    // let colors = ['red','blue','green','orange'];
    // let innerContainers = all_class_inner
    // for(let i = 0; i < colors.length; i++){
    //     innerContainers[i].style.backgroundColor = colors[i]
    // }

    /*************************************** */
    /*** END PART TWO MODIFY */


    /*************************************** */
    /*** START PART THREE CREATE */
    /*************************************** */
    /* 1: NEW PARAGRAPHS */
    /* 1A: Access all paragraph elements, and store the result in a variable called: allPTagsThree */
    /* 1B: Create a function:function customCreateElement(parent){ //body } */
    /* 1C:  In the body of customCreateElement create a new parargraph element*/
    /* 1D:  Set the text of this element to be : `using create Element`*/
    /* 1E:  Set the background of this paragraph element to be green */
    /* 1F:  Set the color of the text in this paragraph element to be white */
    /* 1G: Append this new element to the parent variable within the function. */
    /* 1H: Iterate through the allPTagsThree array and call customCreateElement(), 
    passing the current allPTagsThree element as the parent with each iteration.*/
    /***CODE */
    let allPTagsThree = document.querySelectorAll("p");

    function customCreateElement(parent){
        let paragraphElement = document.createElement("p")
        paragraphElement.innerHTML = "using create Element"
        paragraphElement.style.backgroundColor = "green"
        paragraphElement.style.color = "white"
        parent.appendChild(paragraphElement)
    }

    for(let pTag of allPTagsThree){
        customCreateElement(pTag)
    }



    /***EXPLANATION::
     * With this code, we add a new paragraph inside all paragraph elements that has the text using create Element. 
     * Due to the different background color, it looks like the white text is inside a green box underneath the original text of the parent paragraph element.
     * 
     * task-1-reference-images/part_3_task_1.png
     */

    /*************************************** */
    /* 2: GRID OF BOXES */
    /* 2A: Create another new function: function customNewBoxCreate(parent){ //body }*/
    /* 2B: In the body of customNewBoxCreate create a new div element, that has the class testDiv. 
    /* 2C:Then append this new element to the parent variable within the function. 
    /* 2D:Finally, return</code> this new element */
    /* 2E:Create a nested for loop (for rows and columns) to iterate through 10 columns and 10 rows (just like the JS Review :)). 
        Call the customNewBoxCreate function, in order to generate a new div -> representing each cell in the grid. 
        Ensure that the parent element for each of these new divs is the element whose id is named `new-grid`*/
    /* 2F: You will see at this point that the x,y position of the resulting divs makes no sense... 
        Fix this by doing the following: every time you call customNewBoxCreate() - save the current returned element 
        in a variable i.e. returnedDiv. 
        Set the style (left and top) to the of this element to 
        the necessary x and y position (use the counter variables in the for nested for loop to 
        calculate the new positions.
    /* 2G: BONUS I: Make every div in the resulting grid in an even numbered row have white background 
        and otherwise let it have a background of purple.</li>
    /* 2H: BONUS II: For every div in an even numbered row make it contain the text `EVEN`, 
        otherwise lat it have the content `ODD`.*/

    /***CODE */
    function customNewBoxCreate(parent){
        let newBox = document.createElement("div");
        newBox.className = "testDiv";
        parent.appendChild(newBox);
        return newBox;
    }

    let rowAmount = 9;
    let columnAmount = 9;

    let new_div_id = document.querySelector("#new-grid");

    for(let i = 0; i <= columnAmount; i++){
        for(let x = 0; x <= rowAmount; x++){
            let returnedDiv = customNewBoxCreate(new_div_id);
            returnedDiv.style.left = `${x * 40}px`;
            returnedDiv.style.top = `${i * 40}px`;
            if (i % 2 == 0){
                returnedDiv.style.backgroundColor = "white";
                returnedDiv.innerText = "EVEN";
            }
            else{
                returnedDiv.style.backgroundColor = "cornflowerblue";
                returnedDiv.innerText = "ODD";
            }
        
        }
    }
    console.log(document.querySelectorAll(".testDiv"))


    /***EXPLANATION::
     * 100 elements are returned when printing out all elements with class name testDiv.
     * This occurs because 10 rows * 10 columns equals 100. 
     * First we loop through all the columns, and inside those columns we loop through all the rows.
     * To determine the even odd, we use modulo which is like division but returns the remainder.
     * With this, we can assume any even number divided by 2 will not return a remainder.
     * 
     */

    /*************************************** */
    /* 3: GRID OF BOXES II */

    /* 3A: Create ANOTHER nested for loop - in order to generate a new grid ... 
        USE the same customNewBoxCreate function..., the only difference is that the parent element 
        for each of these new divs is the element whose id is `new-grid-three`. */
    /* 3B: Then: write the code to check when a column is a multiple of 3 (no remainder), 
        when it is a column where the remainder is 1 or when the remainder is 2 ... 
        HINT:: look up the % operator.. */
    /* 3C: Then for each of the above cases: give the new divs in the first case a background of red, 
            then the second a background of orange and the third yellow. */
    /*  3D: Finally, let each div contain the text content representing the associated remainder 
        when dividing by three. */

    /***CODE */
    let new_grid_three = document.querySelector("#new-grid-three");

    for(let i = 0; i <= columnAmount; i++){
        for(let x = 0; x <= rowAmount; x++){
            let returnedDiv = customNewBoxCreate(new_grid_three);
            returnedDiv.style.left = `${x * 40}px`;
            returnedDiv.style.top = `${i * 40}px`;
            if (x % 3 == 0){
                returnedDiv.style.backgroundColor = "red";
            }
            else if(x % 3 == 1){
                returnedDiv.style.backgroundColor = "orange";
            }
            else if(x % 3 == 2){
                returnedDiv.style.backgroundColor = "yellow";
            }
            returnedDiv.innerText = `${x % 3}`
        
        }
    }


    /***EXPLANATION::
     *Essentially  copy pasted my code but changed which parameter I'm sending to customNewBoxCreate.
     *As explained earlier, I am using the modulo operator to return a remainder.
     *Then with that remainder I'm assigning a colour to each div.
     * 
     */

    /*************************************** */
    /*** END PART THREE CREATE */
    /*************************************** */





}