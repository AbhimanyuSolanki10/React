const Hoc = (WrapperComp)=>{
    return function(){
        return <WrapperComp users={[{ename: "raj"} , {ename: "prasad"}]} />;
    }
}

export default Hoc;

//HOC will accept component in parameter and return that component with some extra features
// it is also used to avoid props drilling
//! But , overuse on HOC is NOT-RECOMMENDED