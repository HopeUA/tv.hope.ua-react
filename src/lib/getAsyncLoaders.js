export default function (components) {
    return components.map((c) => {
        if (c.component
            && c.component.WrappedComponent
            && c.component.WrappedComponent.displayName
            && c.component.WrappedComponent.loader) {
            return {
                key: c.component.WrappedComponent.displayName,
                promise: c.component.WrappedComponent.loader(c.params)
            };
        }

        return null;
    }).filter((component) => {
        return component;
    });
}
