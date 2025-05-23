import {classNames} from 'shared/lib/classNames/classNames';
import cls from './PageError.module.scss';
import {useTranslation} from "react-i18next";
import {Button} from "shared/ui/Button/Button.tsx";

interface PageErrorProps {
    className?: string;
}

export const PageError = ({className}: PageErrorProps) => {
    const {t} = useTranslation();

    const reloadPage = (): void => {
        location.reload();
    }
    return (
        <div className={classNames(cls.PageError, {}, [])}>
            <p>{t('Произошла непредвиденная ошибка')}</p>
            <Button onClick={reloadPage}>
                {t('Обновить страницу')}
            </Button>
        </div>
    );
};