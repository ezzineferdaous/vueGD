<template>

 <!-- header-start -->
    <header>
        <div class="header-area ">
            <div id="sticky-header" class="main-header-area">
                <div class="container-fluid">
                    <div class="header_bottom_border">
                        <div class="row align-items-center">
                            <div class="col-xl-2 col-lg-2">
                                <div class="logo">
                                    <router-link to="/">

                                        <img src="../../assets/img/logo.png" alt="">
                                    </router-link>
                                </div>
                            </div>
                            <div class="col-xl-6 col-lg-6">
                                <div class="main-menu  d-none d-lg-block">
<nav>
    <ul id="navigation">
        <li class="active"><router-link to="/" >Home</router-link></li>
        <li><router-link to="/About">About</router-link></li>

        <li ><router-link to="/Destination" href="#">Destination </router-link></li>
         <li ><router-link to="/User" href="#">User </router-link></li>
        
                                               

        
        
        
        <li><router-link to="/Contact"> Contact</router-link></li>
    </ul>
</nav>
                                </div>
                            </div>
                            <div class="col-xl-4 col-lg-4 d-none d-lg-block">
                                <div class="social_wrap d-flex align-items-center justify-content-end">
                                
                                 <router-link to="/Login"  href="#">
                                   Login
                                </router-link>

                                    <div class="social_links d-none d-xl-block">
                                        <ul>
                                            <li><router-link to="/" href="#"> <i class="fa fa-instagram"></i> </router-link></li>
                                            <li><router-link to="/" href="#"> <i class="fa fa-linkedin"></i> </router-link></li>
                                            <li><router-link to="/" href="#"> <i class="fa fa-facebook"></i> </router-link></li>
                                            <li><router-link to="/" href="#"> <i class="fa fa-google-plus"></i> </router-link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        
                           
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </header>
    <!-- header-end -->
</template>