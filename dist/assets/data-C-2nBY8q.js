import{a}from"./entry/index-BcidWyMC.js";const{t}=a();var i=(n=>(n.SingleChoice="choice",n.MultipleChoice="multiple_choice",n.FillIn="matching",n.TrueFalseNotGiven="true_false_not_given",n.YesNoNotGiven="yes_no_not_given",n))(i||{});const s=[{value:"choice",label:"Chọn đáp án đúng"},{value:"multiple_choice",label:"Chọn các đáp án đúng"},{value:"matching",label:"Điền đáp án đúng"},{value:"true_false_not_given",label:"Đúng/Sai/Không được đề cập"},{value:"yes_no_not_given",label:"Có/Không/Không được đề cập"}],u=[{label:"Reading",value:"reading"},{label:"Listening",value:"listening"},{label:"Writing",value:"writing"},{label:"Speaking",value:"speaking"}],r=[{value:"true",label:t("common.true")},{value:"false",label:t("common.false")},{value:"not_given",label:t("common.notGiven")}],c=[{value:"true",label:t("common.true")},{value:"false",label:t("common.false")},{value:"not_given",label:t("common.notGiven")}],o=Array.from({length:2},(n,e)=>({id:String.fromCharCode(65+e),text:String.fromCharCode(65+e)})),_=[{subject:"Reading Part 1",question_count:1,duration:20,questions:Array.from({length:1},(n,e)=>({question_no:e+1,content:"",type:"choice",options:o,answer:null})),media:null}],g=[{subject:"Listening Section 1",question_count:1,duration:10,questions:Array.from({length:1},(n,e)=>({question_no:e+1,content:"",type:"choice",options:o,answer:null})),media:null}],m=[{subject:"",question_count:1,duration:60,questions:Array.from({length:1},(n,e)=>({question_no:e+1,content:"Writing ... about this subject",type:"writing_task_1_academic",options:o,answer:"custom_answer"})),media:null}],v=[{subject:"",question_count:1,duration:15,questions:Array.from({length:1},(n,e)=>({question_no:e+1,content:"Speaking ... about this subject",type:"speaking_part_1",options:o,answer:"custom_answer"})),media:null}],h=Array.from({length:26},(n,e)=>String.fromCharCode(65+e));export{g as L,_ as R,u as S,m as W,v as a,i as b,h as c,s as q,r as t,c as y};
