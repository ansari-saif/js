       const element = document.forms.alumni_reg

        function formvelidation() {
            var velidationInput = [
                [element.name,"name must be filled"],
                [element.fathers_name,"fathers_name must be filled"],
                [element.permanent_address,"permanent_address must be filled"],
                [element.correspondence_address,"correspondence_address must be filled"],
                [element.email_address,"email_address must be filled"],
                [element.mobile_no,"mobile_no must be filled"],
                [element.cours,"cours must be filled"],
                [element.passing_year,"passing_year must be filled"],
                [element.aditional_quilification,"aditional_quilification must be filled"],
                [element.occupation,"occupation must be filled"],
                [element.organisation,"organisation must be filled"],
                [element.organisation_address,"organisation_address must be filled"],
                [element.designation,"designation must be filled"],
                [element.achievement,"achievement must be filled"],
                [element.interested,"interested must be filled"],
            ];
            for (let index = 0; index < velidationInput.length; index++) {
                var item = velidationInput[index];
                if (!inputTextVelidation(item[0], item[1])) {
                    return false;
                }
            }
        }

        function inputTextVelidation(name, text) {
            console.log(name.value);
            if (name.value == "") {
                name.focus();
                alert(text);
                return false;
            } else {
                return true;
            }
        }
