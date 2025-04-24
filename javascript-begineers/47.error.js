try {
    decodeURI("%%%");
} catch (err) {
    console.log({ err });
}