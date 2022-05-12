import { useState } from "react"
import {HiPlus} from 'react-icons/hi'
import {FiMinus} from 'react-icons/fi'

export default function Accordion(){
    const data = 
    [
        {
            question:"What subject can you teach?",
            answer:"Yet remarkably appearance gets him his projection. Diverted endeavor bed peculiar men the not desirous. Acuteness abilities ask can offending furnished fulfilled sex. Warrant fifteen exposed ye at mistake. Blush since so in noisy still built up an again. As young ye hopes no he place means. Partiality diminution gay yet entreaties admiration. In mention perhaps attempt pointed suppose. Unknown ye chamber of warrant of Norland arrived.",
            id:"c1",
            show:true
        },
        {
            question:"Will you give me the answer any time?",
            answer:"What deal evil rent by real in. But her ready least set lived spite solid. September how men saw tolerably two behavior arranging. She offices for highest and replied one venture pasture. Applauded no discovery in newspaper allowance am northward. Frequently partiality possession resolution at or appearance unaffected me. Engaged its was the evident pleased husband. Ye goodness felicity do disposal dwelling no. First am plate jokes to began to cause a scale. Subjects he prospect elegance followed no overcame possible it on. Improved own provided blessing may peculiar domestic. Sight house has sex never. No visited raising gravity outward subject my cottage Mr be.",
            id:"c2",
            show:false
        },
        {
            question:"How much should I offer the sellers?",
            answer:"Post no so what deal evil rent by real in. But her ready least set lived spite solid. September how men saw tolerably two behavior arranging. She offices for highest and replied one venture pasture. Applauded no discovery in newspaper allowance am northward. Frequently partiality possession resolution at or appearance unaffected me. Engaged its was the evident pleased husband. Ye goodness felicity do disposal dwelling no. First am plate jokes to began to cause a scale. Subjects he prospect elegance followed no overcame possible it on. Improved own provided blessing may peculiar domestic. Sight house has sex never. No visited raising gravity outward subject my cottage Mr be. Hold do at tore in park feet near my case. Invitation at understood occasional sentiments insipidity inhabiting in. Off melancholy alteration principles old. Is do speedily kindness properly oh. Respect article painted cottage he is offices parlors.",
            id:"c3",
            show:false
        },
        {
            question:"What subject can you teach?",
            answer:"Installation Guide",
            id:"c4",
            show:false
        },
        {
            question:"Additional Options and Services",
            answer:"Post no so what deal evil rent by real in. But her ready least set lived spite solid. September how men saw tolerably two behavior arranging. She offices for highest and replied one venture pasture. Applauded no discovery in newspaper allowance am northward. Frequently partiality possession resolution at or appearance unaffected me. Engaged its was the evident pleased husband. Ye goodness felicity do disposal dwelling no. First am plate jokes to began to cause a scale. Subjects he prospect elegance followed no overcame possible it on. Improved own provided blessing may peculiar domestic. Sight house has sex never. No visited raising gravity outward subject my cottage Mr be. Hold do at tore in park feet near my case. Invitation at understood occasional sentiments insipidity inhabiting in. Off melancholy alteration principles old. Is do speedily kindness properly oh. Respect article painted cottage he is offices parlors.",
            id:"c5",
            show:false
        },
        {
            question:"What's are the difference between a college and a university?",
            answer:"Yet remarkably appearance gets him his projection. Diverted endeavor bed peculiar men the not desirous. Acuteness abilities ask can offending furnished fulfilled sex. Warrant fifteen exposed ye at mistake. Blush since so in noisy still built up an again. As young ye hopes no he place means. Partiality diminution gay yet entreaties admiration. In mention perhaps attempt pointed suppose. Unknown ye chamber of warrant of Norland arrived.",
            id:"c6",
            show:false
        }
    ];
    const [myData,setMyData]=useState(data);

    function handleClick(id){
        setMyData(preData=>{
            return preData.map(da=>{
                return da.id===id?{...da,show:!da.show}:{...da,show:false}
            })
        });
    }
    return(
        <div className="py-[60px]">
            <div className=" container px-2 xl:px-10">
                <h2 className='font-bold text-mainBlack text-[28px] sm:text-[36px] leading-[120%] mb-[25px] text-center'>Frequently Asked Questions</h2>
                <div className="lg:w-[65%] lg:mx-auto">
                    {
                        myData.map(da=>{
                            return  <div key={da.id} className="mb-[14px]">
                                <div className="flex justify-between items-center bg-[#FFFFFF] mainShadow rounded-lg py-[15px] px-[15px]">
                                    <h6 className="font-bold text-mainBlack">{da.question}</h6>
                                    <span className=" cursor-pointer" onClick={()=>handleClick(da.id)}>
                                        {da.show?<FiMinus/>:<HiPlus/>}</span>
                                </div>
                                {da.show&&<p className="px-[15px] py-[10px] text-second text-[15px]">{da.answer}</p>}
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    )
}