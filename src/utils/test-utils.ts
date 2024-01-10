import { act } from '@testing-library/react';

/**
 * Call a setTimeout with a time of 0ms within an "act".
 * This is useful when your code may use an apollo hook which
 * makes a call and updates state.
 */
export const actDefer = async () => {
	await act(async () => {
		await new Promise((resolve) => {
			setTimeout(resolve, 0);
		});
	});
};

/**
 * An alternative to actDefer that runs state updates that do not
 * produce a new UI render. This is useful when testing hooks
 * that use fake timers, as actDefer will not resolve to run a fake
 * timer.
 *
 * If running a UI or hook testing with fake timers, call `actResolve`
 * after `render` or `renderHook`.
 *
 * If using with the userEvent helper below, be sure to call
 * when using `userEvent.type` but NOT with other calls (simply await them).
 *
 * @see https://kentcdodds.com/blog/fix-the-not-wrapped-in-act-warning#an-alternative-waiting-for-the-mocked-promise
 *
 * @example with UI testing
 * render(<MyComponent />)
 * await actResolve()
 * jest.runOnlyPendingTimers() // fails with actDefer + fake timers, now works
 *
 * @example with userEvent.type (not required for selectEvent or other user events)
 * await userEventFakeTimers.click(screen.getByLabelText(/Title/) // still users await
 * userEventFakeTimers.type(screen.getByLabelText(/Title/), 'Title'); // if you use await, you will get the "not-wrapped-in-act" warning
 * await actResolve()
 */

// export const actResolve = async () => {
// 	const promise = Promise.resolve();
// 	await act(async () => {
// 		await promise;
// 	});
// };
