import * as React from "react";

interface Props {
  fallback: React.ReactNode;
  children: React.ReactNode;
}

export class ErrorBoundary extends React.Component<Props> {
  state: { hasError: boolean } = { hasError: false };

  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: React.ErrorInfo) {
    // Update state so the next render will show the fallback UI.
    console.log(error);
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    // logErrorToMyService(
    //   error,
    //   // Example "componentStack":
    //   //   in ComponentThatThrows (created by App)
    //   //   in ErrorBoundary (created by App)
    //   //   in div (created by App)
    //   //   in App
    //   info.componentStack,
    //   // Only available in react@canary.
    //   // Warning: Owner Stack is not available in production.
    //   React.captureOwnerStack()
    // );
    console.log({ error, info });
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return this.props.fallback;
    }

    return this.props.children;
  }
}
