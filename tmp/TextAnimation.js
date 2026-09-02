import{jsx as _jsx,jsxs as _jsxs,Fragment as _Fragment}from"react/jsx-runtime";import{useEffect,useState,useRef,useCallback,useMemo}from"react";const extractText=props=>{const parse=node=>{if(!node)return"";if(typeof node==="string")return node;if(Array.isArray(node))return node.map(parse).join("");if(node.props?.children)return parse(node.props.children);if(node.props?.text)return parse(node.props.text);if(node.props?.content)return parse(node.props.content);return"";};return parse(props.children||props.text||"");};// --- PURE CSS KEYFRAMES -------------------------------------------------------
// Karate Strike: Characters snap in from the side with a forward lean,
// compressing on impact. The camera "shake" is now baked directly into
// the end of the keyframe so it doesn't conflict with the skew transforms!
const KARATE_CSS=`
@keyframes karate-snap-strike {
    0% {
        opacity: 0;
        transform: translateX(1.5em) scaleX(2) skewX(-30deg);
        text-shadow: -15px 0px 5px rgba(220, 38, 38, 0.8); /* Red trail */
    }
    40% {
        opacity: 1;
        transform: translateX(-0.1em) scaleX(0.8) skewX(15deg);
        text-shadow: 5px 0px 2px rgba(220, 38, 38, 0.4);
    }
    70% {
        transform: translateX(0.05em) scaleX(1.1) skewX(-5deg);
        text-shadow: -2px 0px 0px rgba(220, 38, 38, 0.1);
    }
    /* The Impact Shake Phase */
    80% {
        transform: translate(-1px, 1px) scaleX(1) skewX(0deg);
        text-shadow: 0px 0px 0px transparent;
    }
    90% {
        transform: translate(1px, -1px) scaleX(1) skewX(0deg);
    }
    100% {
        transform: translate(0, 0) scaleX(1) skewX(0deg);
        text-shadow: 0px 0px 0px transparent;
    }
}
`;const CSSKarateStrike=({value,isActive})=>{// Left-to-right combo sequence
const charsData=useMemo(()=>{return value.split("").map((char,index)=>({char,delay:(index*.04).toFixed(3)+"s"}));},[value]);const words=[];let cur=[];for(const item of charsData){if(item.char===" "||item.char==="\n"||item.char==="\r"){if(cur.length){words.push(cur);cur=[];}words.push([item]);}else{cur.push(item);}}if(cur.length)words.push(cur);return /*#__PURE__*/_jsxs(_Fragment,{children:[/*#__PURE__*/_jsx("style",{children:KARATE_CSS}),/*#__PURE__*/_jsx("span",{style:{display:"inline",wordBreak:"break-word"},children:words.map((word,wi)=>{const isSpace=word.length===1&&(word[0].char===" "||word[0].char==="\n"||word[0].char==="\r");if(isSpace){return /*#__PURE__*/_jsx("span",{style:{whiteSpace:"pre-wrap"},children:word[0].char},wi);}return /*#__PURE__*/_jsx("span",{style:{whiteSpace:"nowrap"},children:word.map((item,ci)=>/*#__PURE__*/_jsxs("span",{style:{position:"relative",display:"inline"},children:[/*#__PURE__*/_jsx("span",{style:{opacity:0},children:item.char}),isActive?/*#__PURE__*/_jsx("span",{style:{position:"absolute",left:0,top:0,color:"inherit",display:"inline-block",transformOrigin:"bottom center",// Simplified to a single animation to prevent CSS transform conflicts
    animation:`karate-snap-strike 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) both ${item.delay}`,pointerEvents:"none"},children:item.char}):/* Resting state *//*#__PURE__*/_jsx("span",{style:{position:"absolute",left:0,top:0,color:"inherit",pointerEvents:"none"},children:item.char})]},ci))},wi);})})]});};// --- Loop Component ----------------------------------------------------------
const LoopKarateStrike=({value,isInView})=>{const[tick,setTick]=useState(0);const timerRef=useRef(null);useEffect(()=>{if(!isInView){if(timerRef.current)clearTimeout(timerRef.current);return;}const cycle=()=>{setTick(t=>t+1);timerRef.current=setTimeout(cycle,3e3);};timerRef.current=setTimeout(cycle,100);return()=>{if(timerRef.current)clearTimeout(timerRef.current);};},[isInView]);return /*#__PURE__*/_jsx("span",{children:/*#__PURE__*/_jsx(CSSKarateStrike,{value:value,isActive:isInView&&tick>0})},tick);};// --- Overrides ----------------------------------------------------------------
function useLockedText(props){const originalTextRef=useRef("");if(!originalTextRef.current||typeof props.text==="string"){originalTextRef.current=typeof props.text==="string"?props.text:extractText(props);}return originalTextRef.current;}export function onAppear(Component){return props=>{const value=useLockedText(props);const[isVisible,setIsVisible]=useState(false);const[tick,setTick]=useState(0);const ref=useRef(null);useEffect(()=>{if(!ref.current)return;const obs=new IntersectionObserver(([e])=>{if(e.isIntersecting){setIsVisible(true);setTick(t=>t+1);}else{setIsVisible(false);}});obs.observe(ref.current);return()=>obs.disconnect();},[]);if(!value)return /*#__PURE__*/_jsx(Component,{...props});return /*#__PURE__*/_jsx(Component,{ref:ref,...props,text:/*#__PURE__*/_jsx("span",{children:/*#__PURE__*/_jsx(CSSKarateStrike,{value:value,isActive:isVisible})},`appear-${tick}`)});};}export function onLoop(Component){return props=>{const value=useLockedText(props);const[isInView,setIsInView]=useState(false);const ref=useRef(null);useEffect(()=>{if(!ref.current)return;const obs=new IntersectionObserver(([e])=>setIsInView(e.isIntersecting),{rootMargin:"0px"});obs.observe(ref.current);return()=>obs.disconnect();},[]);if(!value)return /*#__PURE__*/_jsx(Component,{...props});return /*#__PURE__*/_jsx(Component,{ref:ref,...props,text:/*#__PURE__*/_jsx(LoopKarateStrike,{value:value,isInView:isInView})});};}export function onHover(Component){return props=>{const value=useLockedText(props);const[isHovered,setIsHovered]=useState(false);const[tick,setTick]=useState(0);const handleMouseEnter=useCallback(e=>{setIsHovered(true);setTick(t=>t+1);props.onMouseEnter?.(e);},[props.onMouseEnter]);const handleMouseLeave=useCallback(e=>{setIsHovered(false);props.onMouseLeave?.(e);},[props.onMouseLeave]);if(!value)return /*#__PURE__*/_jsx(Component,{...props});return /*#__PURE__*/_jsx(Component,{...props,onMouseEnter:handleMouseEnter,onMouseLeave:handleMouseLeave,text:/*#__PURE__*/_jsx("span",{children:/*#__PURE__*/_jsx(CSSKarateStrike,{value:value,isActive:isHovered})},tick)});};}
export const __FramerMetadata__ = {"exports":{"onHover":{"type":"reactHoc","name":"onHover","annotations":{"framerContractVersion":"1"}},"onLoop":{"type":"reactHoc","name":"onLoop","annotations":{"framerContractVersion":"1"}},"onAppear":{"type":"reactHoc","name":"onAppear","annotations":{"framerContractVersion":"1"}},"__FramerMetadata__":{"type":"variable"}}}
//# sourceMappingURL=./TextAnimation.map
