export async function wait(duration = 1000) {
    await new Promise(resolve => setTimeout(resolve, duration));
}