<html>
    <head>
        <title>sidebar</title>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">  
    <meta name='viewport' content='width=device-width, initial-scale=1'>
        <script src='https://kit.fontawesome.com/a076d05399.js' crossorigin='anonymous'></script>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css" integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ" crossorigin="anonymous">
        <style>
            .nav{
                background-color: yellow;
            }

            .btn{
                height: 40px;
                width:180px;
                border:1px solid black;
                border-radius:15px;
                padding:2px;
                font-size: large;
            }

            #sidebar{
                overflow-y:scroll;
                height:250px;
                background-color:white;
                width:75%;
                padding-top:10px;
                margin-top:10px;
            }

            #filter{
                display: inline-block; 
                background-color: mistyrose; 
                width:20%;
                padding-left: 10px;
                padding-top: 5px;
            }

            #sidebar-content{
                height:20%;
                border-top: 1px solid black;
                border-bottom: 1px solid black;
                display:flex;
                justify-content: space-between;
                padding:5px;
                font-weight: bold;
            }

            #cln{
                display:block;
            }

            #cln1{
                display:none;
            }

            #filtes1{
                display:none;
            }
        </style>
    </head>
    <body>
        <div>
            <div class="nav">Navigation</div>
            <div id="filter">
                <h2><b>Filtered By:</b></h2>
                <button class="btn">Fireplace TV Stand <span>&times;</span></button>
                <div id="sidebar">
                    <script>
                        function oncl(){
                            document.getElementById('filtes1').style.display = 'block';
                            document.getElementById('cln').style.display = 'none';
                            document.getElementById('cln1').style.display = 'block';
                        }
                        function oncl1(){
                            document.getElementById('filtes1').style.display = 'none';
                            document.getElementById('cln').style.display = 'block';
                            document.getElementById('cln1').style.display = 'none';
                        }
                    </script>
                   <div id="sidebar-content">
                        <p>Types</p>
                        <span id="cln" onclick="oncl()"><i class="fas fa-angle-down"></i></span>
                        <span id="cln1" onclick="oncl1()"><i class="fas fa-angle-up"></i></span>
                    </div>
                   <div id="filtes1">
                    <div>
                        <input type="checkbox"> TV Stands
                    </div>
                    <div>
                        <input type="checkbox"> TV Stands
                    </div>
                    <div>
                        <input type="checkbox"> TV Stands
                    </div>
                    <div>
                        <input type="checkbox"> TV Stands
                    </div>
                   </div>
                   <div id="sidebar-content"><p>Price</p><span><i class="fas fa-angle-down"></i></span></div>
                   <div id="sidebar-content"><p>Colors</p><span><i class="fas fa-angle-down"></i></span></div>
                   <div id="sidebar-content"><p>Styles</p><span><i class="fas fa-angle-down"></i></span></div>
                   <div id="sidebar-content"><p>Fits Most TVS</p><span><i class="fas fa-angle-down"></i></span></div>
                   <div id="sidebar-content"><p>Materials</p><span><i class="fas fa-angle-down"></i></span></div>
                   <div id="sidebar-content"><p>Finishers</p><span><i class="fas fa-angle-down"></i></span></div>
                   <div id="sidebar-content"><p>Assembly</p><span><i class="fas fa-angle-down"></i></span></div>
                   <div id="sidebar-content"><p>Number OF shelves</p><span><i class="fas fa-angle-down"></i></span></div>
                   <div id="sidebar-content"><p>Brand</p><span><i class="fas fa-angle-down"></i></span></div>
                   <div id="sidebar-content"><p>Sales and Promotion</p><span><i class="fas fa-angle-down"></i></span></div>
                   <div id="sidebar-content"><p>Produt Feature</p><span><i class="fas fa-angle-down"></i></span></div>
                   <div id="sidebar-content"><p>Customer Ratingns</p><span><i class="fas fa-angle-down"></i></span></div>
                   <div id="sidebar-content"><p>Availibilty</p><span><i class="fas fa-angle-down"></i></span></div>
                </div>
            </div>
            <div style="display: inline-block;">
                <h3>sidebar</h3>
            </div>
        </div>
    </body>
</html>