export default function RadialGlow({ size, className }){
    return (
        <div class={`w-[${size}] aspect-square rounded-full`} style={{ 
            backgroundImage: 'radial-gradient(circle at center, #458BC5 0%, #FF007AB1 17%, #FF007A00 70%)' 
        }}></div>
    )
}