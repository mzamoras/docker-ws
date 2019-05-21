export default params => {

    return {

        // STYLES
        fullPos: {
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            position: 'absolute'
        },
        flexCenter: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column'
        },
        flexEnd: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            flexDirection: 'row'
        },
        flexStart: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            flexDirection: 'row'
        },

        // DEFINED STRUCTURES
        basePageStructure:{
            position: 'absolute',
            width: '100%',
            height: '100%',
            display: 'flex',
            userSelect: 'none'
        }
    }
}