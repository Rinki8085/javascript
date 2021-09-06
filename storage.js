localStorage
sessionStorage
cookies

localStorage // persistant storage
             // value never delete by itself
             // long term storage
             // availabel to all browser

sessionStorage // temporary storage
               // value delete as soon as you close the tab
               // short term storage 
               // availabel only in particular tab
                
cookies // save with respect to url
        // expires in time

//local storage---------------------------------

localStorage.setItem("city","Delhi")
undefined
localStorage.getItem("city")
"Delhi"
localStorage.removeItem("city")
undefined

//sessionStorage--------------------------------

sessionStorage.setItem("city","Delhi")
undefined
sessionStorage.getItem("city")
"Delhi"
sessionStorage.removeItem("city")
undefined

//cookies---------------------------------------

document.cookie
"_ga=GA1.2.826953711.1630908285; _gid=GA1.2.1804411564.1630908285; _pbjs_userid_consent_data=6683316680106290; _lr_retry_request=true; _lr_env_src_ats=false; __gads=ID=f5a519818292bd74:T=1630908322:S=ALNI_MbjeYUbX1vGURxQehVGcomDqoocsw"

document.cookie="user=admin; expires=Sun, 05 Sep 2021 01:00:00 UTC" 
"user=admin; expires=Sun, 05 Sep 2021 01:00:00 UTC"