(function($) {



  function decode_utf8(s) {


    var string = decodeURIComponent(s);

   

    return string;
    
  }


    function change(string){



      

       replace =  string.replaceAll('u0104','Ą');
       replace =  replace.replaceAll('u0106','Ć');
       replace =  replace.replaceAll('u0118','Ę');
       replace =  replace.replaceAll('u0141','Ł');
       replace =  replace.replaceAll('u0143','Ń');
       replace =  replace.replaceAll('u00d3','Ó');
       replace =  replace.replaceAll('u015a','Ś');
       replace =  replace.replaceAll('u0179','Ż');
       replace =  replace.replaceAll('u017b','Ż');
       replace =  replace.replaceAll('u0105','ą');
       replace =  replace.replaceAll('u0107','ć');
       replace =  replace.replaceAll('u0119','ę');
       replace =  replace.replaceAll('u0142','ł');
       replace =  replace.replaceAll('u0144','ń');
       replace =  replace.replaceAll('u00f3','ó');
       replace =  replace.replaceAll('u015b','ś');
       replace =  replace.replaceAll('u017a','ź');
       replace =  replace.replaceAll('u017c','ż');
       replace =  replace.replaceAll('\\','');
       replace =  replace.replaceAll('//','');
       replace =  replace.replaceAll('>','');
       replace =  replace.replaceAll('<','');
     


      return replace;

    }














  window.checkRegon=function(val){
    $.ajax(
      {
        url: 'https://zamowienia-bielsko.mbm.edu.pl/wp-admin/gus.php',
        data: {
          dane: val
         
        },
        method: 'post'
      }
    ).done( function( response ) {
      console.log(response);

    }).fail( function( jqxhr, textStatus, error ) {
       
    });
  };


  window.checkNip=function(val){
 
  };


  

   

   
    
    $('#pobierz').click(function(e) {
        
        






      console.log(e.target);

           $.ajax(
            {
              url: 'https://zamowienia-bielsko.mbm.edu.pl/wp-admin/gus.php',
              data: {
                dane: $('#nip').val()
               
              },
              method: 'post'
            }
          ).done( function( response ) {

            window.data = response;

            window.ciag = window.data.match(/Regon.*Regon>/);


            if(window.ciag != null){

            window.regon = window.ciag[0].match(/[0-9]/g);
            
            window.okregon='';
            window.sregon='';
            

            for(var i =0; i< window.regon.length; i++){

             

              window.okregon += window.regon[i];

              

            }



            for(var i =0; i< 9; i++){

             

              window.sregon += window.okregon[i];

              

            }

            if(window.regon.length>9){


             


                $.ajax(
                  {
                    url: 'https://zamowienia-bielsko.mbm.edu.pl/wp-admin/gus4.php',
                    data: {
                      dane: window.sregon
                     
                    },
                    method: 'post'
                  }
                ).done( function( response ) {
                    window.response3 = response;


                    window.prefirma2 = response3.match(/praw_nazwa.*praw_nazwa/);



                    if(window.prefirma2 != null){
      
                    window.firma2 = window.prefirma2[0].replace('praw_nazwa>', '');
       
                    window.firma2 = window.firma2.replace('praw_nazwa', '');
                    window.firma2 = window.firma2.replace('praw_nazwa', '');
                    window.firma2 = window.firma2.replace('\\', '');
                    window.firma2 = window.firma2.replace('\\', '');
                    window.firma2 = window.firma2.replace('\\', '');
                    window.firma2 = window.firma2.replace('\\', '');
                    window.firma2 = window.firma2.replace('\\', '');
                    window.firma2 = window.firma2.replace('<', '');
                    window.firma2 = window.firma2.replace('/', '');

                    window.firma2 = change(window.firma2);
      
                    $('#firma').val(window.firma2);
      
                    }


                    window.prefirma2 = response3.match(/praw_nazwa.*praw_nazwa/);



                    if(window.pretel2 != null){
      
                    window.tel2 = window.pretel2[0].replace('praw_numerTelefonu>', '');
       
                    window.tel2 = window.tel2.replace('praw_numerTelefonu', '');
                    window.tel2 = window.tel2.replace('praw_numerTelefonu', '');
                    window.tel2 = window.tel2.replace('\\', '');
                    window.tel2 = window.tel2.replace('\\', '');
                    window.tel2 = window.tel2.replace('\\', '');
                    window.tel2 = window.tel2.replace('\\', '');
                    window.tel2 = window.tel2.replace('\\', '');
                    window.tel2 = window.tel2.replace('<', '');
                    window.tel2 = window.tel2.replace('/', '');


                    window.tel2 = change(window.tel2);
      
                    $('#telefon').val(window.tel2);
      
                    }

                    window.preul2 = response3.match(/praw_adSiedzUlica_Nazwa.*praw_adSiedzUlica_Nazwa/);
                    

                    if(window.preul2 != null){
      
                      window.ul2 = window.preul2[0].replace('praw_adSiedzUlica_Nazwa>', '');
         
                      window.ul2 = window.ul2.replace('praw_adSiedzUlica_Nazwa', '');
                      window.ul2 = window.ul2.replace('praw_adSiedzUlica_Nazwa', '');
                      window.ul2 = window.ul2.replace('\\', '');
                      window.ul2 = window.ul2.replace('\\', '');
                      window.ul2 = window.ul2.replace('\\', '');
                      window.ul2 = window.ul2.replace('\\', '');
                      window.ul2 = window.ul2.replace('\\', '');
                      window.ul2 = window.ul2.replace('<', '');
                      window.ul2 = window.ul2.replace('/', '');

                      window.ul2 = change(window.ul2);
        
                      $('#second_address_line').val(window.ul2);
        
                      }
                   





                      window.prewoj2 = response.match(/praw_adSiedzWojewodztwo_Nazwa.*praw_adSiedzWojewodztwo_Nazwa/);

                      if(window.prewoj2 != null){
         
         
                      window.woj2 = window.prewoj2[0].replace('praw_adSiedzWojewodztwo_Nazwa>', '');
         
                      window.woj2 = window.woj2.replace('praw_adSiedzWojewodztwo_Nazwa', '');
                      window.woj2 = window.woj2.replace('\\', '');
                      window.woj2 = window.woj2.replace('\\', '');
                      window.woj2 = window.woj2.replace('\\', '');
                      window.woj2 = window.woj2.replace('\\', '');
                      window.woj2 = window.woj2.replace('\\', '');
                      window.woj2 = window.woj2.replace('<', '');
                      window.woj2 = window.woj2.replace('/', '');
         

                      window.woj2 = change(window.woj2);

                      $('#wojewodztwo').val(window.woj2);
         
                      }

            
                }).fail( function( jqxhr, textStatus, error ) {
                   
                });

                  

              

            }



            if(parseInt(window.okregon).length>12){


            }


          }



          
            window.prekod = response.match(/KodPocztowy.*KodPocztowy/);

            if(window.prekod != null){


            window.kod = window.prekod[0].replace('KodPocztowy>', '');

            window.kod = window.kod.replace('KodPocztowy', '');
            window.kod = window.kod.replace('\\', '');
            window.kod = window.kod.replace('\\', '');
            window.kod = window.kod.replace('\\', '');
            window.kod = window.kod.replace('<', '');
            window.kod = window.kod.replace('/', '');

            window.kod = change(window.kod);

            $('#kod').val(window.kod);
            }

            window.premiej = response.match(/Miejscowosc.*Miejscowosc/);



            if(window.premiej != null){

            window.miej = window.premiej[0].replace('Miejscowosc>', '');

            window.miej = window.miej.replace('Miejscowosc', '');
            window.miej = window.miej.replace('\\', '');
            window.miej = window.miej.replace('\\', '');
            window.miej = window.miej.replace('\\', '');
            window.miej = window.miej.replace('<', '');
            window.miej = window.miej.replace('/', '');


            window.miej = change(window.miej);

            $('#city').val(window.miej);

            $('#first_address_line').val(window.miej);
    


            }
            


            

            $.ajax(
              {
                url: 'https://zamowienia-bielsko.mbm.edu.pl/wp-admin/gus2.php',
                data: {
                  dane: window.okregon
                 
                },
                method: 'post'
              }
            ).done( function( response ) {
  
             window.response = response;

             window.premail = response.match(/fiz_adresEmail.*fiz_adresEmail/);

             if(window.premail != null){


             window.meil = window.premail[0].replace('fiz_adresEmail>', '');

             window.meil = window.meil.replace('fiz_adresEmail', '');
             window.meil = window.meil.replace('\\', '');
             window.meil = window.meil.replace('\\', '');
             window.meil = window.meil.replace('\\', '');
             window.meil = window.meil.replace('<', '');
             window.meil = window.meil.replace('/', '');

             window.meil = change(window.meil);

             $('#email').val(window.meil);

             }




             window.prefirma = response.match(/fiz_nazwaSkrocona.*fiz_nazwaSkrocona/);

             if(window.prefirma != null){


             window.firma = window.prefirma[0].replace('fiz_nazwaSkrocona>', '');

             window.firma = window.firma.replace('fiz_nazwaSkrocona', '');
             window.firma = window.firma.replace('\\', '');
             window.firma = window.firma.replace('\\', '');
             window.firma = window.firma.replace('\\', '');
             window.firma = window.firma.replace('<', '');
             window.firma = window.firma.replace('/', '');


             window.firma = change(window.firma);

             if(window.regon.length<10){
            
             $('#firma').val(window.firma);
             }

             }




             window.preul = response.match(/fiz_adSiedzUlica_Nazwa.*fiz_adSiedzUlica_Nazwa/);



             if(window.preul != null){

             window.ul = window.preul[0].replace('fiz_adSiedzUlica_Nazwa>', '');

             window.ul = window.ul.replace('fiz_adSiedzUlica_Nazwa', '');
             window.ul = window.ul.replace('\\', '');
             window.ul = window.ul.replace('\\', '');
             window.ul = window.ul.replace('\\', '');
             window.ul = window.ul.replace('\\', '');
             window.ul = window.ul.replace('\\', '');
             window.ul = window.ul.replace('<', '');
             window.ul = window.ul.replace('/', '');

             window.ul = change(window.ul);

             if(window.regon.length<10){

             $('#second_address_line').val(window.ul);


             }

             }


             window.prewoj = response.match(/fiz_adSiedzWojewodztwo_Nazwa.*fiz_adSiedzWojewodztwo_Nazwa/);

             if(window.prewoj != null){


             window.woj = window.prewoj[0].replace('fiz_adSiedzWojewodztwo_Nazwa>', '');

             window.woj = window.woj.replace('fiz_adSiedzWojewodztwo_Nazwa', '');
             window.woj = window.woj.replace('\\', '');
             window.woj = window.woj.replace('\\', '');
             window.woj = window.woj.replace('\\', '');
             window.woj = window.woj.replace('\\', '');
             window.woj = window.woj.replace('\\', '');
             window.woj = window.woj.replace('<', '');
             window.woj = window.woj.replace('/', '');

             window.woj = change(window.woj);


             if(window.regon.length<9){

             $('#wojewodztwo').val(window.woj);

             }
             }





             window.pretel = response.match(/fiz_numerTelefonu.*fiz_numerTelefonu/);


            if(window.pretel != null){

             window.tel = window.pretel[0].replace('fiz_numerTelefonu>', '');

             window.tel = window.tel.replace('fiz_numerTelefonu', '');
             window.tel = window.tel.replace('\\', '');
             window.tel = window.tel.replace('\\', '');
             window.tel = window.tel.replace('\\', '');
             window.tel = window.tel.replace('\\', '');
             window.tel = window.tel.replace('\\', '');
             window.tel = window.tel.replace('<', '');
             window.tel = window.tel.replace('/', '');


             window.tel = change(window.tel);

             if(window.regon.length<9){

             $('#telefon').val(window.tel);
             }
            }





            window.prestrona = response.match(/fiz_adresStronyinternetowej.*fiz_adresStronyinternetowej/);


            if(window.prestrona != null){

             window.strona = window.prestrona[0].replace('fiz_adresStronyinternetowej>', '');

             window.strona = window.strona.replace('fiz_adresStronyinternetowej', '');
             window.strona = window.strona.replace('\\', '');
             window.strona = window.strona.replace('\\', '');
             window.strona = window.strona.replace('\\', '');
             window.strona = window.strona.replace('\\', '');
             window.strona = window.strona.replace('\\', '');
             window.strona = window.strona.replace('<', '');
             window.strona = window.strona.replace('/', '');


             window.strona = change(window.strona);

             $('#url').val(window.strona);
             
            }

             

            


             $.ajax(
              {
                url: 'https://zamowienia-bielsko.mbm.edu.pl/wp-admin/gus3.php',
                data: {
                  dane: window.okregon
                 
                },
                method: 'post'
              }
            ).done( function( response ) {
  
              window.response2 = response;

              window.prename = response.match(/fiz_imie1.*fiz_imie1/);



              if(window.prename != null){

              window.name = window.prename[0].replace('fiz_imie1>', '');
 
              window.name = window.name.replace('fiz_imie1', '');
              window.name = window.name.replace('fiz_imie1', '');
              window.name = window.name.replace('\\', '');
              window.name = window.name.replace('\\', '');
              window.name = window.name.replace('\\', '');
              window.name = window.name.replace('<', '');
              window.name = window.name.replace('/', '');


              window.name = change(window.name);

              $('#first_name').val(window.name);

              }


              window.prename2 = response.match(/fiz_nazwisko.*fiz_nazwisko/);


              if(window.prename2 != null){

              window.name2 = window.prename2[0].replace('fiz_nazwisko>', '');
 
              window.name2 = window.name2.replace('fiz_nazwisko', '');
              window.name2 = window.name2.replace('fiz_nazwisko', '');
              window.name2 = window.name2.replace('\\', '');
              window.name2 = window.name2.replace('\\', '');
              window.name2 = window.name2.replace('\\', '');
              window.name2 = window.name2.replace('\\', '');
              window.name2 = window.name2.replace('<', '');
              window.name2= window.name2.replace('/', '');


              window.name2 = change(window.name2);

              $('#last_name').val(window.name2);

              }



              

             
    
             
    
             
    
        
          
    
    
              
    
              
    
              
    
             

              

              
              
  
            }).fail( function( jqxhr, textStatus, error ) {
           
            });
  
            }).fail( function( jqxhr, textStatus, error ) {
           
            });


          }).fail( function( jqxhr, textStatus, error ) {
         
          });
         




          
          







     }) 
    
    




})(jQuery);