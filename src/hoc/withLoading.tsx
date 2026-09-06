interface withLoadingProps {
  isLoading: boolean;
}

export function withLoading<P extends object>(
  Component: React.ComponentType<P>
) {
  return function EnhancedCompnent(props: P & withLoadingProps) {
    const { isLoading, ...restProps } = props;
    if (isLoading) {
      return <div> loading ... </div>;
    }
    return <Component {...restProps} />;
  };
}
